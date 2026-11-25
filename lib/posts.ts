export type Post = { slug: string; title: string; tag: string; read: string; excerpt: string; body: { h?: string; p?: string; ul?: string[] }[] };

export const BYLINE = "Astha Hospital team";

export const posts: Post[] = [
  {
    slug: "naturopathy-and-back-pain",
    title: "How naturopathy approaches back pain",
    tag: "Back pain",
    read: "4 min read",
    excerpt: "What a drug-free, whole-body approach to back pain usually looks at, and why a proper assessment comes first.",
    body: [
      { p: "Back pain is one of the most common reasons people look for help. It has many possible causes, from muscle strain and long hours of sitting to problems in the spine itself. That is why the first step is always an assessment, not a treatment plan." },
      { h: "The whole-body view", p: "Naturopathy tends to look beyond the sore spot. Posture, daily routine, sleep, stress, body weight and activity level are all part of the conversation, because they can all affect how the back feels." },
      { h: "What a plan may include", p: "Depending on the person, a plan can combine several gentle approaches. At our hospital these include:" },
      { ul: ["Yoga and stretching matched to your comfort and fitness", "Hydro therapy, using hot and cold water applications", "Acupressure and Ceragem spinal therapy", "Guidance on sitting, lifting and sleeping positions"] },
      { h: "What it cannot do", p: "Natural therapies support comfort and healthy habits. They do not replace urgent medical care. Seek medical help straight away if back pain follows an injury, or comes with numbness, weakness in the legs, fever, or loss of control of bladder or bowels." },
      { p: "Every person is different. A physician will assess your case and tell you honestly what to expect." },
    ],
  },
  {
    slug: "daily-habits-cervical-pain",
    title: "Daily habits that can make cervical pain worse",
    tag: "Cervical",
    read: "4 min read",
    excerpt: "Neck and shoulder strain often builds up from small everyday habits. Here are the common ones to watch.",
    body: [
      { p: "Neck stiffness and cervical pain are common in people who spend long hours at a desk or on a phone. Many everyday habits can add strain over time. Noticing them is a useful first step." },
      { h: "Habits worth noticing", p: "These are commonly linked with neck and shoulder discomfort:" },
      { ul: ["Looking down at a phone for long stretches", "Working at a screen that sits too low or too far away", "Sitting for hours without a break", "Sleeping with the neck bent at an awkward angle", "Holding a phone between ear and shoulder", "Carrying a heavy bag on one shoulder"] },
      { h: "Small changes people often try", p: "Taking short breaks to stand and move, raising the screen to eye level, and gentle neck and shoulder movement can help many people feel more comfortable. How much movement is right for you depends on your condition, so ask before starting new exercises." },
      { h: "When to get checked", p: "See a doctor promptly if neck pain comes with arm numbness or weakness, severe headache, dizziness, or follows an injury." },
      { p: "A physician will assess your case and suggest what suits you." },
    ],
  },
  {
    slug: "what-happens-at-a-nature-cure-hospital",
    title: "What happens at a nature cure hospital",
    tag: "Your visit",
    read: "3 min read",
    excerpt: "A plain-language guide to a first visit: the conversation, the therapies and the daily routine advice.",
    body: [
      { p: "If you have never visited a nature cure hospital, it helps to know what to expect. This is a general outline. The details depend on you and on the physician." },
      { h: "1. A conversation first", p: "A visit usually begins with talking. You describe your concerns, how long you have had them, your daily routine and any treatment you already take. Bring earlier reports if you have them." },
      { h: "2. A plan for you", p: "The physician then suggests a combination of therapies and habits. We offer yoga, acupressure, steam bath, hydro therapy, Ceragem, magnet therapy, Sujok, and chromo and veins therapy. Not everyone needs all of them." },
      { h: "3. Routine advice", p: "Much of the benefit people look for comes from what they do at home, such as regular movement, sleep and meals. Expect guidance you can carry out on your own." },
      { h: "Keep your doctor informed", p: "Natural therapies are meant to work alongside, not instead of, medical care. Do not stop or change any prescribed medicine without talking to your doctor." },
      { p: "Our hospital has been serving Rohtak since 1995." },
    ],
  },
  {
    slug: "stress-and-lifestyle-habits",
    title: "Stress, sleep and lifestyle: where to begin",
    tag: "Lifestyle",
    read: "4 min read",
    excerpt: "Stress, poor sleep and irregular routines often feed each other. A few general starting points.",
    body: [
      { p: "Stress, poor sleep, low energy and irregular eating often go together. Because they affect one another, many people find it helps to look at the daily routine as a whole." },
      { h: "Routine matters", p: "Regular meal times, regular sleep and wake times, and some daily movement give the body a steady rhythm. Small, steady changes are easier to keep than big ones." },
      { h: "Calming practices", p: "Slow breathing, relaxation and gentle yoga are practices many people use to unwind. A trained instructor can match them to your age, fitness and health conditions." },
      { h: "When to seek help", p: "If low mood, anxiety or sleeplessness lasts for weeks or affects your daily life, speak to a doctor. If you ever feel unsafe or think about harming yourself, contact emergency services or a crisis helpline right away." },
      { p: "A physician will assess your case. There is no one routine that suits everyone." },
    ],
  },
];
