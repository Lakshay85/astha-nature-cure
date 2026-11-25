export type Treatment = { id: string; name: string; hindi: string; blurb: string; good: string[]; icon: "oil" | "steam" | "leaf" | "drop" | "flame" | "spine" | "herb" | "lotus" };

export const HOSPITAL = {
  name: "Astha Yoga & Nature Cure Hospital",
  short: "Astha",
  since: 1995,
  phone: "+91 98960 91578",
  tel: "+919896091578",
  email: "asthanaturecure@gmail.com",
  address: "Satya Villa, 151/8 Shivaji Colony, Rohtak, Haryana 124001",
  timings: "6:30 AM to 12:30 PM and 4:00 PM to 8:00 PM",
  map: "https://www.google.com/maps/search/?api=1&query=Astha+Yoga+and+Nature+Cure+Hospital+Rohtak",
};

export const treatments: Treatment[] = [
  { id: "yoga", name: "Yoga", hindi: "योग", blurb: "Guided asana, pranayama and relaxation matched to your condition and fitness. A daily practice you can carry home.", good: ["Stress and depression", "Back and neck stiffness", "Weight and digestion"], icon: "lotus" },
  { id: "acupressure", name: "Acupressure", hindi: "एक्यूप्रेशर", blurb: "Firm finger pressure on specific points to relieve pain and improve the body's own balance. No needles.", good: ["Headache and migraine", "Body pain", "Sinus"], icon: "flame" },
  { id: "steam", name: "Steam Bath", hindi: "भाप स्नान", blurb: "A supervised steam session that relaxes muscles, opens the pores and eases stiff joints.", good: ["Joint stiffness", "Body aches", "Sluggish digestion"], icon: "steam" },
  { id: "hydro", name: "Hydro Therapy", hindi: "जल चिकित्सा", blurb: "Hot and cold water applications, packs and baths used to improve circulation and calm pain.", good: ["Joint and knee pain", "Back pain", "Fatigue"], icon: "drop" },
  { id: "ceragem", name: "Ceragem", hindi: "सेराजेम", blurb: "A warm, roller-based spinal therapy bed that works along the spine with heat and gentle pressure.", good: ["Cervical and back pain", "Spine stiffness", "Muscle tension"], icon: "spine" },
  { id: "magnet", name: "Magnet Therapy", hindi: "चुंबक चिकित्सा", blurb: "Magnets placed on the body or used with water to support pain relief and recovery.", good: ["Joint pain", "Nerve discomfort", "Slow recovery"], icon: "herb" },
  { id: "sujok", name: "Sujok", hindi: "सुजोक", blurb: "A Korean hand and foot point therapy using seeds and small tools to ease pain across the body.", good: ["Migraine", "Pain relief", "Stress"], icon: "leaf" },
  { id: "chromo", name: "Chromo and Veins Therapy", hindi: "रंग और नस चिकित्सा", blurb: "Colour therapy with filtered light, and veins therapy aimed at circulation and nerve comfort.", good: ["Circulation concerns", "Nerve weakness", "Mood and sleep"], icon: "oil" },
];

export const conditions = ["Cervical", "Back pain", "Joint and knee pain", "Sinus", "Migraine", "Paralysis", "Depression", "Obesity", "Digestion", "Parkinson's", "Diabetes", "Heart conditions"];

export const camp = {
  title: "Free Yoga and Natural Health Check-up Camp",
  date: "Sunday, 13 December 2026",
  iso: "2026-12-13T08:00:00+05:30",
  time: "8:00 AM to 12:00 noon",
  where: "Astha Yoga & Nature Cure Hospital, Shivaji Colony, Rohtak",
  includes: ["Free consultation with our physicians", "Back, joint and posture screening", "Blood sugar and BMI check", "Live yoga and pranayama session", "Diet and daily routine guidance"],
};

export const slots = ["6:30 AM", "7:30 AM", "8:30 AM", "9:30 AM", "10:30 AM", "11:30 AM", "12:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];

export const faqs: [string, string][] = [
  ["What is nature cure?", "Nature cure (naturopathy) is an approach that uses yoga, water, steam, pressure points and daily-routine changes to support the body instead of relying on medicines. It works alongside, not instead of, emergency or specialist medical care."],
  ["Is the treatment drug-free?", "Our therapies are drug-free: yoga, acupressure, steam bath, hydro therapy, Ceragem, magnet therapy, Sujok, and chromo and veins therapy. If you already take prescribed medicine, do not stop or change it without talking to your own doctor."],
  ["What conditions do you treat?", "People come to us for cervical and back pain, joint and knee pain, migraine, sinus, stress and depression, weight, digestion, diabetes and other lifestyle concerns. A physician will tell you honestly what natural therapy can and cannot do in your case."],
  ["How long will treatment take?", "It depends on your condition and on the plan your physician suggests at the first consultation. Call us on +91 98960 91578 if you want to ask about sessions, or about any longer stay, before you travel."],
  ["What should I bring to the first visit?", "Bring any earlier reports and prescriptions, a list of the medicines you take, and a photo ID. Wear loose, comfortable clothes. Opening hours are 6:30 AM to 12:30 PM and 4:00 PM to 8:00 PM."],
  ["What are the fees, and is insurance accepted?", "We do not publish fees or insurance details on this site. Please call +91 98960 91578 to ask about consultation fees, payment methods and whether any insurance applies."],
];
