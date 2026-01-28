import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import './novices/novices.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, '') ?? '';
const buildApiUrl = (endpoint) => (API_BASE_URL ? `${API_BASE_URL}${endpoint}` : endpoint);
const normalizeList = (payload) => {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  return payload.data ?? payload.items ?? [];
};
const getImageSource = (item) =>
  item?.imageUrl?.trim() || item?.image?.trim() || item?.imageKey?.trim() || 'img/team/01.jpg';

const NovicesPage = () => {
  const [novices, setNovices] = useState([]);
  const [buildingMap, setBuildingMap] = useState({});
  const [roomMap, setRoomMap] = useState({});

  useEffect(() => {
    let isMounted = true;
    const fetchNovices = async () => {
      try {
        const response = await fetch(buildApiUrl('/novices'));
        if (!response.ok) throw new Error('Unable to load novices');
        const payload = await response.json();
        if (isMounted) {
          setNovices(normalizeList(payload));
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchNovices();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchLookup = async (endpoint, setter, idField, labelField) => {
      try {
        const response = await fetch(buildApiUrl(endpoint));
        if (!response.ok) return;
        const payload = normalizeList(await response.json());
        const map = {};
        payload.forEach((entry) => {
          const id = entry?.[idField] ?? entry?.id;
          const label = entry?.[labelField] ?? entry?.name;
          if (id != null && label) {
            map[String(id)] = label;
          }
        });
        if (isMounted) {
          setter(map);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchLookup('/buildings', setBuildingMap, 'building_id', 'building_name');
    fetchLookup('/rooms', setRoomMap, 'room_id', 'room_name');
    return () => {
      isMounted = false;
    };
  }, []);

  const visibleNovices = useMemo(() => novices.slice(0, 5), [novices]);

  const renderDetails = (novice) => {
    const building = buildingMap[String(novice.building_id)] || novice.building?.building_name;
    const room = roomMap[String(novice.room_id)] || novice.room?.room_name;
    return (
      <>
        {building && <p className="text-sm text-slate-600">Building: {building}</p>}
        {room && <p className="text-sm text-slate-600">Room: {room}</p>}
      </>
    );
  };

  return (
    <>
      <Navigation />
      <div className="novices-page">
        <header className="novices-page__hero">
          <h3>ရဟန်း / သာမဏေများ</h3>
        </header>
        <div className="novices-page__main">
          {visibleNovices.map((novice) => {
            const name = novice.novice_name || novice.name || 'Novice';
            const id = novice.novice_id ?? novice.id ?? novice.noviceId;
            const card = (
              <article className="profile-card">
                <div className="img">
                  <img src={getImageSource(novice)} alt={name} />
                </div>
                <div className="caption">
                  <h3>{name}</h3>
                  {renderDetails(novice)}
                </div>
              </article>
            );
            return id ? (
              <Link key={id} to={`/novices/${id}`} className="profile-card-link" aria-label={`View ${name}`}>
                {card}
              </Link>
            ) : (
              <div key={name} className="profile-card-link">
                {card}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NovicesPage;
