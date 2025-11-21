import React, { useState } from "react";
import "./AboutPage.css";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

const heroBanner = "/img/about-1.png";

const focusCards = [
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "သာမဏေငယ်များရရှိရန်",
    description:
      "သံဃာတော်တို့သည် ဆင်းရဲသောတောရွာများမှ ဖြစ်ကြသည်။ ထို့ကြောင့် တောရွာများမှသာမဏေများ စုဆောင်းရမည်။",
  },
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "မည်ကဲ့သို့ စုဆောင်းရမည်နည်း",
    description:
      "မိဘများဆင်းရဲကြသဖြင့် ခိုင်းရသည့်အရွယ်တွင် လက်ဘက်ရည်ဆိုင်စသည်တို့၌ ရသမျှငွေ ဖြင့် ခိုင်းနေကြသည်။ ထိုကလေးတို့သည် အရွယ်ရောက်လာသောအခါ ပညာမတတ်သဖြင့် အသိဉာဏ်ခေါင်းပါးကာ မူးယစ် သောက်စားရမ်းကားနေကြသည်။ ကလေးလည်းဘဝပျက်၊ မိဘလည်းဝင်ငွေမရပေ။ တိုင်းပြည်အတွက်လည်း နစ်နာဆုံးရှုံးသည်။ ထိုမိဘတို့ကို သားသမီးအားခိုင်းစားမည့် ငွေပမာဏ တစ်လ (၅)သောင်းကျပ်ပေး၍လည်းကောင်း၊ ရဟန်းအရွယ်တွင် တစ်လ(၁)သိန်းကျပ်ပေး၍သော်လည်းကောင်း ဖြေရှင်းမှရတော့မည်။ ထိုနည်းဖြင့်သာ သာမဏေများ၊ ရဟန်းများစုဆောင်းရတော့မည်။",
  },
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "အနှိုင်းမဲ့ သာသနာ့အမွေ",
    description:
      "မိဘတို့သည် အနှိုင်းမဲ့ရတနာများရှိသော်လည်း ထိုရတနာကိုတန်ဖိုးမသိကြသဖြင့် ဆုံးရှုံးနေကြသည်ကို မသိကြပေ။ မြတ်စွာဘုရားရှင်၏ဓာတ်တော်များဖြင့် စေတီတည်ခြင်း၊ ရေတွင်း၊ ရေကန်၊ ဇရပ်၊ တန်ဆောင်း၊ ဂူ၊ ကျောင်း၊ ဇရပ်(၈၄၀ဝဝ)စီ လှူဒါန်းခဲ့သောကောင်းမှုသည် သားတစ်ယောက်ကို သာသနာ့ဘောင်သို့ သွတ်သွင်းသောကောင်းမှုလောက် မမြတ်ပေ။ ထို့ကြောင့် သားတစ်ယောက်ကို သာသနာ့ဘောင်သို့ သွတ်သွင်းခြင်းဖြင့် အနှိုင်းမဲ့ရတနာကို ယူကြစေလိုသည်။",
  },
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "ခေတ်မီသင်ကြားရေးများ",
    description:
      "မြတ်စွာဘုရားရှင်သည်ငါတို့အား သနားကရုဏာကြီးစွာဖြင့် လေးအသင်္ချေနှင့်ကမ္ဘာတစ်သိန်းတိုင်အောင် ဘဝပေါင်းများစွာ၊ အသက်ပေါင်းများစွာရင်းနှီးခဲ့ပြီးပြီ။ မြတ်စွာဘုရားရှင် တာဝန်ကျေသွားပြီ။ တို့အတွက်လည်း ကယ်တင်ရန်အတွက် ပိဋကတ်သုံးပုံထားခဲ့သေးသည်။ သံဃာတော်အစဉ်အဆက်တို့ကလည်း သာသနာမကွယ်အောင်ထမ်းဆောင်ခဲ့သဖြင့် တာဝန်ကျေခဲ့ပြီ။ တို့တစ်တွေက တာဝန်ကျေဖို့လိုအပ်သည်။",
  },
];

const summaryStats = [
  { value: "3,000+", label: "သာမဏေအရေအတွက်" },
  { value: "3,000", label: "ရဟန်းအရေအတွက်" },
  { value: "3,000", label: "စာချသံဃာ" },
  { value: "25", label: "၀န်ထမ်းအရေအတွက်" },
];

const highlightCards = [
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="Sparkles icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "သာသနာတော် ပျက်စီးယိုယွင်းလာပုံ",
    description:
      "မြတ်ဗုဒ္ဓသာသနာတော်၏ ထေရဝါဒ (၅) နိုင်ငံရှိရာ မြန်မာနိုင်ငံ၌သာ ပရိယတ္တိသာသနာနှင့် ပဋိပတ္တိသာသနာ ထွန်းကားနေသည်။ သို့သော်လည်း မြန်မာနိုင်ငံသံဃာစစ်တမ်း၌ (၂၀၁၄) ခုနှစ်တွင် သံဃာ(၅)သိန်းရှိခဲ့သည်။ (၂၀၁၈ -၂၀၁၉)ခုနှစ်စစ်တမ်းတွင် သံဃာ(၂)သိန်းသာ ရှိတော့သည်။ ဒီအတိုင်းဆိုလျှင် နောင်နှစ်များတွင် စိုးရိမ်ဖွယ်ရာဖြစ်လာသည်။",
  },
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="Sparkles icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "စာသင်တိုက်များစွာ ပိတ်ထားရခြင်း",
    description:
      "သာသနာတော်၏အခြေပြုရာ တောရွာရှိဘုန်းတော်ကြီး ကျောင်းများ၌ သာမဏေများ မရှိသလောက် ရှားပါးလာသဖြင့် စာသင်သားသာမဏေငယ်များ၊ ရဟန်းငယ်များ နည်းပါးသွားကာ စာသင်တိုက်များစွာပိတ်ထားရသည်။ သည်အတိုင်းဆိုလျှင် ထိန်းမရအောင် သာသနာကွယ်မှု အရှိန်ကောင်းလာလိမ့်မည်။ ခေတ်ပညာထွန်းကားလာသည်နှင့်အမျှ မိဘတို့သည် သားသမီးများကို ခေတ်ပညာကျောင်းများ၌သာ ပညာသင်ကြားစေသည်။ ဘွဲ့ယူပြီးနောက် လုပ်ငန်းခွင်ဝင်ရသည်။ အရွယ်ရောက်တော့ အိမ်ထောင်ပြုကြရသည်။ မိဘတို့သည် မြတ်စွာဘုရားရှင်ဟောကြားဆုံးမသောတရားတော်တို့ကို လေ့လာသင်ကြားမှုမရှိခဲ့ပေ။ မိဘအစဉ်အလာအရသာ ဗုဒ္ဓဘာသာခံယူထားခြင်းဖြစ်သည်။ ထိုမိဘတို့ကမွေးသော သားသမီးတို့သည်လည်း ထိုနည်းအတိုင်းပင်ဖြစ်ကြသည်။ ဘာသာတရားအပေါ်လေးနက်မှုမထားရာမှ ဘာသာမဲ့အဖြစ် ခံယူသွားကြသည်။ ထိုသဘောကြောင့်လည်း သာသနာကွယ်လာရခြင်း ဖြစ်သည်။",
  },
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="Sparkles icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "ကာမဂုဏ် လွှမ်းမိုးခြင်း",
    description:
      "ရှေးယခင် ဗုဒ္ဓဘာသာဝင်တို့သည် အရှက်အကြောက် ကြီးကြသဖြင့် ကာမဂုဏ်လွန်ကဲမှုမရှိအောင် ထိန်းသိမ်း ကြသည်။ အထူးအားဖြင့် အမျိုးသမီးများသည် အရှက်အကြောက်အလွန်ကြီးကြသည်။ ယခုအခါ အနောက်တိုင်းယဉ်ကျေးမှုကို အားကျလာသဖြင့် အမျိုးသမီးများ၏ ဝတ်စားဆင်ယင်နေထိုင်မှုတို့သည် ကာမဂုဏ်စိတ်လွန်ကဲလာအောင် ဆွသလိုဖြစ်နေကြသည်။ ထိုအတွက်ကြောင့် လူငယ်ရဟန်းငယ်တို့သည် ကာမဂုဏ်စိတ်ကို မထိန်းသိမ်းနိုင်ကြသဖြင့် သာသနာ့ဘောင်၌ မပျော်မွေ့ချင်ကြတော့ပေ။ ထိုသဘောကြောင့်လည်း သာသနာကွယ်လာရခြင်းဖြစ်သည်။",
  },
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="Sparkles icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "မိဘတို့၏ ဆင်းရဲနွမ်းပါးမှု",
    description:
      "အချို့သောသာမဏေနှင့်ရဟန်းငယ်တို့သည် သင်္ကန်း၊ ထီး၊ ဖိနပ်၊ စာအုပ်စသော အသုံးအဆောင်များ မပြည့်စုံကြပေ။ မိဘများကိုလည်း ဆင်းရဲနွမ်းပါးနေ သဖြင့် မတောင်းရက်ကြပေ။ မိဘများဆင်းရဲနေသည်ကိုလည်း မကြည့်ရက်ကြပေ။ ထို့ကြောင့် သာမဏေငယ်နှင့်ရဟန်းငယ်များ လူဝတ်လဲကြပြီး ပြည်တွင်းပြည်ပသို့ စီးပွားရှာသွားကြသည်။ ထိုသဘောကြောင့်လည်း သာသနာကွယ်လာရခြင်းဖြစ်သည်။",
  },
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="Sparkles icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "ပဋိပတ္တိမထမ်းဆောင်ကြခြင်း",
    description:
      "ရဟန်းဟူသည် သံသရာဘေးကိုကြောက်သည့် စိတ်ရှိရမည်၊ ရွံမုန်းရမည်၊ ကာမဂုဏ်ကိုရွံမုန်းရမည်၊ မြတ်စွာဘုရား၏ ကျေးဇူးတော်နှင့်သာသနာမကွယ်လို သောစိတ်ရှိရမည်။ ထိုစိတ်မျိုးရှိမှသာ သာသနာ့ဘောင်၌ မြဲမည်ဖြစ်သည်။ ယခုအခါ စာပေတတ်သည့်များစွာသောသံဃာတော်တို့သည် ဝိပဿနာတရားအားထုတ်မှုမရှိသလောက်ပင် ရှားပါးလာသည်။ အချို့ရဟန်းတို့သည် မြတ်စွာဘုရားရှင် ဆုံးမသော ပညတ်တော်နှင့်တရားတို့ကို ဆန့်ကျင်၍ ပုထုစဉ်အကြိုက် ကာမဂုဏ်အားပေးသည့်အပြုအမူများ ပြုနေကြသည်။ ထိုသဘောကို ခေတ်လူငယ်တို့အမြင်၌ ဘာသာတရားကိုအထင်လွဲမှား လာကြသည်။ ထိုသဘောကြောင့်လည်း သာသနာကွယ်လာရခြင်းဖြစ်သည်။",
  },
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="Sparkles icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "ဘာသာခြားတို့၏ လွှမ်းမိုးမှု",
    description:
      "အခြားဘာသာဝင်တို့သည် မိမိတို့လူမျိုးနှင့်နိုင်ငံတွင် သာမက အခြားလူမျိုး၊ အခြားဘာသာ၊ အခြားနိုင်ငံကို ပါလွှမ်းမိုးလာနိုင်အောင် နည်းအမျိုးမျိုးဖြင့်အားထုတ် နေကြသည်။ သို့သော် ထေရဝါဒဗုဒ္ဓဘာသာဝင် တို့သည် မိမိတို့ဘာသာ ပျက်စီးလျော့နည်းလာသည်ကိုသိနေသော်လည်း ထိန်းသိမ်းလိုမှုအလွန်အားနည်းကြသည်။ ဘာသာတရားစစ်မှန်ပါသော်လည်း မစစ်မှန်သောဘာသာတို့ မလွှမ်းမိုးနိုင်အောင် ကာကွယ်လိုစိတ်မရှိကြပေ။ ငွေကြေးချမ်းသာမှုကိုသာ လွန်လွန်ကဲကဲအားစိုက်နေကြသည်။ ထိုသဘောကြောင့်လည်း သာသနာကွယ်လာရခြင်းဖြစ်သည်။",
  },
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="Sparkles icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "အင်တာနက် လက်ကိုင်ဖုန်း အန္တရာယ်",
    description:
      "သာမဏေတို့သည် စာပေသင်ကြားလိုခြင်းထက် လက်ကိုင်ဖုန်းဖြင့်ဂိမ်းကစားလိုစိတ်သာ ဆန္ဒပြင်းပြနေကြသည်။ ထို့ကြောင့် စာမရသဖြင့် စာမေးပွဲအကြိမ်ကြိမ်ကျကြသည်။",
  },
  {
    icon: (
      <img
        src="/img/about/icon.png"
        alt="Sparkles icon"
        className="about-highlight__sparkles"
      />
    ),
    title: "မိမိ၏တာဝန်",
    description:
      "သာသနာကွယ်လျှင် အပါယ်ဘေးဆင်းရဲ၊ သံသရာဝဋ်ဆင်းရဲဒုက္ခများစွာ ခံစားကြရတော့မည်။ ထို့ကြောင့် မိမိတို့၏နောင်မွေးမည့်ဆွေစဉ်မျိုးဆက်တို့အတွက် ထိုဆင်းရဲတို့မှမကျရောက်အောင် စောင့်ရှောက်ဖို့ တာဝန်ရှိသည်။ တို့ကိုမွေးဖွားသည့် ဘိုးဘွားဘီဘင်တို့နှင့်ဆရာတော်သံဃာတော်တို့က တာဝန်သိစွာဖြင့် သာသနာတော်ကိုစောင့်ရှောက်ခဲ့သည်မှာ တာဝန်ကျေခဲ့ပြီ။ တို့အလှည့်မှာ တို့သွေးသားအစဉ်အဆက်ဖြင့် လူဖြစ်ကြမည့်နောင်မျိုးဆက်သစ်တို့အတွက် တာဝန်ကျေဖို့၊ တာဝန်သိဖို့လိုအပ်သည်။",
  },
];

const appHighlights = [
  "Monthly reflections in both Burmese and English",
  "Prayer requests and celebratory updates",
  "Donation receipts delivered instantly",
  "Guided meditations recorded onsite",
];

const highlightRows = [
  highlightCards.slice(0, 3),
  highlightCards.slice(3, 6),
  highlightCards.slice(6),
];

const AboutPage = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const toggleCard = (key) =>
    setExpandedCards((prev) => ({ ...prev, [key]: !prev[key] }));
  const handleToggleKey = (event, key) => {
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "Spacebar"
    ) {
      event.preventDefault();
      toggleCard(key);
    }
  };

  return (
    <>
      <Navigation />
      <div className="about-page">
        <main className="about-page__content">
          <section className="about-all">
            <div className="about-all__hero">
              <div className="about-all__text">
                <span className="about-all__eyebrow">A BIT</span>
                <h1>About Us</h1>
                <p>
                  ယခုအခါ သာသနာသုံးရပ်မှ သာသနာ့တာဝန်ထမ်းဆောင်တော်မူသော သံဃာတော်တို့သည် ပဋိပတ္တိသာသနာနှင့်ပဋိဝေဓ သာသနာထမ်းဆောင်မှု လွန်စွာနည်းနေပြီဖြစ်၍ ကွယ်ပျောက်သည့် အခြေအနေသို့ ရောက်ရှိနေပြီဖြစ်သည်။
                </p>
                <a className="about-all__link" href="#about">
                  Learn more
                </a>
                <button type="button" className="about-all__cta">
                  Explore more
                </button>
              </div>
              <div className="about-all__collage">
                <div className="about-all__stacked">
                  <figure className="about-all__image about-all__image--stacked">
                    <img
                      src="/img/intro-bg.jpg"
                      alt="Monks walking in formation"
                    />
                  </figure>
                  <figure className="about-all__image about-all__image--stacked">
                    <img
                      src="/img/about-1.png"
                      alt="Monastery complex from above"
                    />
                  </figure>
                </div>
                <figure className="about-all__image about-all__portrait">
                  <img
                    src="/img/about.jpg"
                    alt="Senior teacher portrait"
                  />
                </figure>
              </div>
            </div>
            <hr></hr>
            <div className="about-highlight">
              <div className="about-highlight__heading">
                <div className="about-highlight__intro">
                  <div>
                    <p className="section-title">About Us</p>
                    <h3 className="about-highlight__accent">
                      သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက် တည်ထောင်ခြင်းရည်ရွယ်ချက်
                    </h3>
                  </div>
                  <p className="about-highlight__intro-text">
                    Lorem ipsum dolor sit amet consectetur. Egestas libero arcu
                    lorem sem massa malesuada. Semper pretium eros nisl
                    tincidunt. Platea vitae scelerisque sit id. Quis elit metus
                    dui placerat. Ut sit varius egestas vulputate volutpat
                    aliquam quam vitae.
                  </p>
                </div>
              </div>
              <div className="about-highlight__grid">
                {highlightRows.map((row, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className={`about-highlight__row ${
                      rowIndex === highlightRows.length - 1
                        ? "about-highlight__row--center"
                        : ""
                    }`}
                  >
                    {row.map((card) => {
                      const cardKey = `highlight-${card.title}`;
                      const isExpanded = Boolean(expandedCards[cardKey]);
                      return (
                        <article key={card.title}>
                          <div className="about-highlight__icon">
                            {card.icon}
                          </div>
                          <h3>{card.title}</h3>
                          <p
                            className={`about-card__description ${
                              isExpanded ? "is-expanded" : ""
                            }`}
                          >
                            {card.description}
                          </p>
                          <span
                            role="button"
                            tabIndex={0}
                            className="about-highlight__link"
                            aria-expanded={isExpanded}
                            onClick={() => toggleCard(cardKey)}
                            onKeyDown={(event) =>
                              handleToggleKey(event, cardKey)
                            }
                          >
                            {isExpanded ? "Show less" : "Learn more"}
                          </span>
                        </article>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="about-story" id="about">
              <div className="about-story__left">
                <p className="section-title">About Sasana Nursery</p>
                <h2>We nurture wisdom with humble hearts</h2>
                <p>
                  ယခုအခါ သာသနာသုံးရပ်မှ သာသနာ့တာဝန်ထမ်းဆောင်တော်မူသော
                  သံဃာတော်တို့သည် ပဋိပတ္တိသာသနာနှင့်ပဋိဝေဓ သာသနာထမ်းဆောင်မှု
                  လွန်စွာနည်းနေပြီဖြစ်၍ ကွယ်ပျောက်သည့် အခြေအနေသို့
                  ရောက်ရှိနေပြီဖြစ်သည်။ ပဋိယတ္တိသာသနာတော်အခြေခံရာတောရွာများ၌
                  သာမဏေများ အလွန့်အလွန်ရှားပါးနေပြီ။ မြို့ကြီးများ၌သာလျှင်
                  သာမဏေများတွေ့ရတော့သည်။ ထိုသာမဏေများကိုလည်း သာသနာတော်၌
                  ဆက်လက်မြဲနိုင်မည်ဟု မခန့်မှန်းနိုင်တော့ပေ။
                  အင်တာနက်အတတ်ပညာများက လွန်စွာဖျက်ဆီးနေသည်။
                  လက်ရှိရှိနေသောသာမဏေငယ်များကိုပင် ကျောင်းထိုင်ဆရာတော်များက
                  တင်းတင်းကြပ်ကြပ် မဆုံးမနိုင်တော့သည့်အပြင်
                  အလိုလိုက်ချော့မွေးနေရသည့်အဆင့်သို့ ရောက်ရှိနေသည်။
                  သံဃာတော်များမှာလည်း နှစ်စဉ်လိုလို လူ့ဘောင်သို့
                  များစွာပြောင်းကုန်ကြပြီ။
                </p>
                <p>
                  အနာဂတ် မကြာတော့သည့်အချိန်တွင် လခပေးထားသော်မှ
                  ရဟန်းကောင်းတစ်ပါးရရန် မလွယ်ကူတော့မည့်အခြေအနေသို့
                  ဆိုက်ရောက်တော့မည်ဟုခန့်မှန်းရသည်။ ထေရဝါဒနိုင်ငံများမှာလည်း
                  သာသနာအလွန် ဆုတ်ယုတ်လာလေပြီ။ ထို့ကြောင့် သာသနာနောင်ရေး
                  ရင်လေးစရာဖြစ်လာတော့သည်။ မြတ်စွာဘုရားရှင်နှင့်တကွ ဆရာအစဉ်အဆက်၊
                  သံဃာ အစဉ်အဆက်တို့ တာဝန်ကျေခဲ့လေပြီ။ ယခုလက်ရှိ
                  သံဃာတော်များနှင့်တကွ ဒါယကာ၊ ဒါယိကာမအပေါင်းတို့က
                  အနာဂတ်သာသနာမကွယ်ပျောက်နိုင်ရေးအတွက် ကြိုတင်ကာကွယ်
                  စောင့်ရှောက်မှသာလျှင် ဖြစ်တော့မည်ဟု အကြောင်းပေါ်လာသည်။
                  ထိုသဘောတရားတို့ကိုထောက်ရှု၍ သာသနာမျိုးဆက် အလျှင်မပြတ်ရန်
                  အထူးသီးသန့်ပျိုးမည့် သာမဏေငယ်များ စနစ်တကျတည်ထောင်ဖို့
                  လိုအပ်သည်။
                </p>
                <div className="about-story__actions">
                  <button
                    type="button"
                    className="about-page__btn about-page__btn--primary"
                  >
                    Learn More
                  </button>
                  <button
                    type="button"
                    className="about-page__btn about-page__btn--ghost"
                  >
                    Watch Video <span className="about-page__btn-icon">▶</span>
                  </button>
                </div>
              </div>
              <div className="about-story__right">
                <div className="about-story__stats">
                  {summaryStats.map((stat) => (
                    <article key={stat.label}>
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-focus">
              <div className="about-focus__heading">
                <h3>သာသနာကို မည်သို့တည်တံ့စေမည်နည်း</h3>
              </div>
              <div className="about-focus__grid">
                {focusCards.map((focus) => {
                  const focusKey = `focus-${focus.title}`;
                  const isExpanded = Boolean(expandedCards[focusKey]);
                  return (
                    <article key={focus.title}>
                      <span className="about-focus__card-icon">
                        {focus.icon}
                      </span>
                      <h3>{focus.title}</h3>
                      <p
                        className={`about-card__description ${
                          isExpanded ? "is-expanded" : ""
                        }`}
                      >
                        {focus.description}
                      </p>
                      <span
                        role="button"
                        tabIndex={0}
                        className="about-highlight__link"
                        aria-expanded={isExpanded}
                        onClick={() => toggleCard(focusKey)}
                        onKeyDown={(event) => handleToggleKey(event, focusKey)}
                      >
                        {isExpanded ? "Show less" : "Learn more"}
                      </span>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="about-app">
              <div className="about-app__visual">
                <div className="about-app__frame">
                  <img src="img\kbz.png" alt="App preview on phone" />
                </div>
                <div className="about-app__badge">Monthly Members 5,000+</div>
                <div className="about-app__dots">
                  {[...Array(9)].map((_, idx) => (
                    <span key={idx} />
                  ))}
                </div>
              </div>
              <div className="about-app__content">
                <h2>လှူဒါန်းနိုင်ပါသည်</h2>
                <br></br>
                <p>
                  သာသနာတည်တံ့နိုင်ရေးနှင့် သဲအင်းဂူဝိပဿနာဓမ္မရိပ်သာ၏
                  အထွေထွေပြုပြင်ထိန်းသိမ်းရေးလုပ်ငန်းများတွင် သုံးစွဲရန်ရည်ရွယ်၍
                  “သာသနာ့ပျိုးဥယျာဉ် Android Application” ဖြင့်
                  လစဉ်လှူဒါန်းနိုင်ပါသည်။
                </p>
                <ul>
                  {appHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button type="button" className="hero-cta about-app__cta">
                  <span>လှူဒါန်းရန်</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
