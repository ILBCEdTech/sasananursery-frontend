import React, { useState } from "react";
import "./news.css";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

const newsPosts = [
  {
    title: "Facebook Post 1",
    image:
      "https://sasananursery.com/storage/images/1761017213tt002.jpg",
    description:
      "စာအုပ်အလှူတော်ရှင်ဇိနဝံသ၊ ရှင်ဝိသုဒ္ဓါစာရ၊ရှင်ဒဿန၊ရှင်သီဟဉာဏ၊ရှင်ရက္ခဝံသ၊ရှင်ကာရုည၊ရှင်ရအဂ္ဂစာရ၊ရှင်နရိန္ဒ၊ရှင်တိက္ခိန္ဒြိယ ရှင်သာမဏေလေးများစုပေါင်း၍သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက် စာကြည့်တိုက်တွင် ရှင်သာမဏေများ ဖတ်ရှုလေ့လာရန်အတွက် စာအုပ်စာပေများကိုသဒ္ဓါကြည်ဖြူစွာဖြင့် ဆက်ကပ်လှူဒါန်းပါသည်။စိတ်ချမ်းသာ၊ကိုယ်ကျန်းမာစွာဖြင့် သာသနာအကျိုးသယ်ပိုးနိုင်ပါစေ။ကောင်းကျိုးလိုရာဆန္ဒပြည့်ဝကြပြီးလျှင်တရားထူးတရားမြတ်များကို လျှင်မြန်စွာ သိရှိခံစားပြီး နိဗ္ဗာန်ချမ်းသာတိုင်အောင် အကျိုးပေးနိုင်သော အထောက်အပံ့ကောင်းသည် စင်စစ်မသွေ ဖြစ်ပါစေသော်...",
  },
  {
    title: "Facebook Post 2",
    image:
      "https://sasananursery.com/storage/images/1761017031tt.jpg",
    description:
      "ရှင်သာမဏေဘဝ နေထိုင်နည်းနှင့်အခြေခံသာမဏေကျင့်ဝတ်များကို သင်ကြားပြီး၍ သက်ဆိုင်ရာ အတန်းများသို့ သင်ကြားခွင့်ရကြသည့် သာမဏေများ။ ",
  },
  {
    title: "Facebook Post 3",
    image:
      "https://sasananursery.com/storage/images/1755007092a1.jpg",
    description:
      "သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်တွင် ဝါဆိုဝါကပ်တော်မူသောသံဃာတော်အရှင်သူများအား ရှင်ဇိနဝံသအား အမှူးထား၍ဦးသန်းဦး ၏ (၄၇)နှစ်ပြည့်မွေးနေ့ဦးသန်းဦး + နော်ကညောလား သမီး -မရွှန်းရတီသန်းဦး ကမာရွတ်မြို့နယ် ၊ရန်ကုန်မြို့မှဝါဆိုသင်္ကန်း နှင့် နဝကမ္မ အလှူတော်အဖြစ် သဒ္ဓါကြည်ဖြူစွာ ဆက်ကပ်လှူဒါန်းပါသည်။",
  },
  {
    title: "Facebook Post 4",
    image:
      "https://sasananursery.com/storage/images/1755007104a3.jpg",
    description:
      "သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်တွင် ဝါဆိုဝါကပ်တော်မူသောသံဃာတော်အရှင်သူများအား ရှင်ဇိနဝံသအား အမှူးထား၍ဦးသန်းဦး ၏ (၄၇)နှစ်ပြည့်မွေးနေ့ဦးသန်းဦး + နော်ကညောလား သမီး -မရွှန်းရတီသန်းဦး ကမာရွတ်မြို့နယ် ၊ရန်ကုန်မြို့မှဝါဆိုသင်္ကန်း နှင့် နဝကမ္မ အလှူတော်အဖြစ် သဒ္ဓါကြည်ဖြူစွာ ဆက်ကပ်လှူဒါန်းပါသည်။",
  },
  {
    title: "Facebook Post 5",
    image:
      "https://sasananursery.com/storage/images/17510057703.jpg",
    description:
      "သာသနာ့ပျိုးဥယျဉ်ကျောင်းတိုက်ကြီး၏ မူလ ပဓာန နာယက အဂ္ဂမဟာကမ္မဋ္ဌာနာစရိယ ကျေးဇူတော်ရှင် အောင်လံဆရာတော်ဘုရားကြီးအား စုပေါင်းဝါဆိုသင်္ကန်း ဆက်ကပ်လှူဒါန်းမည်ဖြစ်ပါသဖြင့် ယောဂီဟောင်းများနှင့် ဓမ္မမိတ်ဆွေအပေါင်းတို့အား အောက်ပါအစီအစဉ်အတိုင်းကြွရောက်ပါရန် လေးစားစွာဖြင့် ဖိတ်ကြားအပ်ပါသည်။",
  },
  {
    title: "Facebook Post 6",
    image:
      "https://sasananursery.com/storage/images/1749736341505915684_741887628403151_2795203663196025612_n.jpg",
    description:
      "သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်တွင် ကျောင်းသန့်ရှင်းရေးလုပ်ငန်းဆောင်ရွက်နိုင်ရန်အတွက်ဒေါ်မိုးမြတ်ဆောင်း၏ မွေးနေ့ကုသိုလ်အဖြစ်ကာလတန်ဖိုး 520000MMK ခန့်ရှိ Model:KW35KAWA GASOLINE BRUSH CUTTER (၂)လုံး သဒ္ဓါကြည်ဖြူစွာလှူဒါန်းခြင်းကိုဝမ်းမြောက်နုမော သာဓု ခေါ်ဆိုနိုင်စေရန်မှတ်တမ်းတင် ဖော်ပြလိုက်ပါသည်…။Sasana Nursery Media Team11/6/2025(Wednesday )",
  },
];

const NewsPage = () => {
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleDescription = (title) =>
    setExpandedPosts((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <>
      <Navigation />
      <div className="news-page">
        <div className="news-page__content">
          <section className="news-hero">
            <h1 className="news-hero__title">Facebook နောက်ဆုံး သတင်းများ</h1>
          </section>
          <div className="news-section-title">
            <h2>နောက်ဆုံး သတင်းများ</h2>
          </div>
          <section className="news-grid">
            {newsPosts.map((post) => {
              const isExpanded = Boolean(expandedPosts[post.title]);
              return (
                <article key={post.title} className="news-post-card">
                  <h2 className="news-post-card__title">{post.title}</h2>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="news-post-card__image"
                  />
                  <div className="news-post-card__content">
                    <p
                      className={`news-post-card__excerpt ${
                        isExpanded ? "is-expanded" : ""
                      }`}
                    >
                      {post.description}
                    </p>
                    <button
                      type="button"
                      className="news-post-card__readmore"
                      onClick={() => toggleDescription(post.title)}
                    >
                      {isExpanded ? "Show less" : "read more"}
                    </button>
                  </div>
                </article>
              );
            })}
          </section>
          <div className="news-load-more">
            <button type="button" className="news-load-more__button">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
