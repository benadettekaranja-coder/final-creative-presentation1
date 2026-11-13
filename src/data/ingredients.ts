import type { Ingredient, PortraitCard } from "@/types";

/**
 * All five ingredients live here, separately from the interaction logic.
 * To update a story, edit its text, notes or media entries below.
 *
 * To add a real photograph or screenshot, give the media item a `src`
 * (a path inside /public, beginning with "/") and descriptive `alt` text:
 *
 *   { src: "/images/public-speaking/finals.jpg", alt: "…", … }
 *
 * Until then, the item renders as a clearly labelled placeholder.
 */
export const ingredients: Ingredient[] = [
  {
    id: "microphone",
    numeral: "I",
    objectName: "The Microphone",
    theme: "Finding my voice",
    intro:
      "A story about public speaking, a white melamine cup, and carrying on after a forgotten line.",
    reflection: [
      "I used to think finding my voice meant knowing exactly what to say.",
      "Turns out, sometimes it means forgetting your lines, finding your way back, and continuing anyway.",
    ],
    notes: [
      { label: "First speech", text: "“Still I Stand”" },
      { label: "The prop", text: "A white melamine cup" },
      { label: "Second round", text: "Inspired by Chinua Achebe" },
      {
        label: "The road",
        text: "Semifinals, a forgotten line, then the finals",
      },
    ],
    mediaLabel: "From the stage",
    media: [
      {
        src: "/images/public-speaking/competition.jpg",
        alt: "Presenting a speech on stage, holding the white melamine cup",
        caption: "Speech day.",
        aspect: "4 / 5",
        span: "wide",
        focus: "center 18%",
        suggestedFile: "public-speaking/competition.jpg",
      },
    ],
    tone: "theatrical",
  },
  {
    id: "lightbulb",
    numeral: "II",
    objectName: "The Lightbulb",
    theme: "The joy of figuring things out",
    intro:
      "A story about Buildathon ideas, research, feedback, and learning to enjoy the detours.",
    reflection: [
      "I discovered that I quite enjoy the process of developing ideas.",
      "The research, the questions, the feedback, going back to the drawing board, looking at a problem from another angle...",
      "Not every idea became what I imagined. But I learned to appreciate the process of getting there.",
    ],
    notes: [
      { label: "The room", text: "The Buildathon" },
      {
        label: "One idea",
        text: "Fairer music contracts for emerging Kenyan musicians",
      },
      {
        label: "Another idea",
        text: "A bilingual tool for parents who mainly use Facebook",
      },
      {
        label: "The method",
        text: "Research, questions, feedback, another angle",
      },
    ],
    mediaLabel: "From the sketchbook",
    media: [],
    tone: "inventive",
  },
  {
    id: "scroll",
    numeral: "III",
    objectName: "The Scroll",
    theme: "Learning to recognise my value",
    intro:
      "A story about mock applications, CVs, interviews, and learning to say what I can do.",
    // Provisional reflection: replace with the final wording when it is ready.
    reflection: [
      "There's a difference between having skills and knowing how to communicate that you have them.",
      "I am still learning the latter.",
    ],
    notes: [
      { label: "The practice", text: "Mock job applications" },
      { label: "The paperwork", text: "CV and cover letter development" },
      {
        label: "The interviews",
        text: "Preparation for Junior Software Engineering roles",
      },
      {
        label: "The guidance",
        text: "Feedback and recommendations from mentors",
      },
    ],
    mediaLabel: "From the desk",
    media: [],
    tone: "scholarly",
  },
  {
    id: "thread",
    numeral: "IV",
    objectName: "The Golden Thread",
    theme: "People, unexpectedly",
    intro:
      "A story about strangers who became friends, mentors, and perspectives I did not see coming.",
    reflection: [
      "A few months ago, many of these people were complete strangers.",
      "Now they're friends whose presence I genuinely value.",
      "Through conversations, shared experiences, different perspectives and little moments together, some of them have completely redefined how I see certain things.",
      "It's funny how people you meet by chance can end up meaning so much.",
    ],
    notes: [
      { label: "Before", text: "Many of these people were complete strangers" },
      { label: "Now", text: "Friends whose presence I genuinely value" },
      {
        label: "In between",
        text: "Conversations, shared experiences, little moments",
      },
      { label: "Also", text: "Mentors and conversations" },
    ],
    mediaLabel: "The people in the room",
    media: [],
    tone: "warm",
  },
  {
    id: "mirror",
    numeral: "V",
    objectName: "The Mirror",
    theme: "A little more myself",
    intro: "A quiet note on arriving a little more like myself.",
    reflection: [
      "I don't think I left KamiLimu as an entirely different person.",
      "But the person at the end of this experience speaks on stage, has friends she deeply values, and believes in herself a little more.",
      "And perhaps that's enough.",
      "Not a complete transformation. Just a little more courage, a little more perspective, and a little more belief in what I can do.",
    ],
    mediaLabel: "Before, and a little after",
    media: [
      {
        src: "/images/friendships/beginning.jpg",
        alt: "The group sharing a meal around a table on the first day",
        caption: "The beginning.",
        aspect: "3 / 2",
        span: "wide",
        suggestedFile: "friendships/beginning.jpg",
      },
    ],
    tone: "quiet",
  },
];

export const finalPortrait: PortraitCard = {
  src: "/images/final/portrait.jpg",
  alt: "A smiling portrait taken at night on the grass, wearing dark sunglasses and a cream fleece",
  placeholder: "A portrait from towards the end of KamiLimu",
  suggestedFile: "final/portrait.jpg",
  aspect: "3 / 4",
};
