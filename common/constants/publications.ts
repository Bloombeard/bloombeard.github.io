import { TPublicationBlock, TStoryTypes } from "../types/types";

const storyTypes: TStoryTypes = {
  flashFiction: "Flash Fiction",
  shortStory: "Short Story",
  novella: "Novella",
  comic: "Comic",
};

export const publications: TPublicationBlock[] = [
  {
    title: "Between High and Low Tide",
    pubDetails: "Published in Dark Lane Anthology, Volume 9, in Fall 2020",
    storyType: storyTypes.shortStory,
    target: "https://www.amazon.com/Dark-Lane-Anthology-Nine-Anthologies-ebook/dp/B08CB866JN",
  },
  {
    title: `The Puppet${String.fromCharCode(8209)}King`,
    pubDetails: "Published in Typehouse, issue 18, in January 2020",
    storyType: storyTypes.shortStory,
    target:
      "http://typehousemagazine.com/th/content/TypehouseMagazineIssue19Jan2020.pdf",
  },
  {
    title: "A Statue of a Crazed Horse",
    pubDetails: "Published in Jersey Devil Press, issue 103, in January 2019",
    awards: "Nominated for the Pushcart Prize",
    storyType: storyTypes.flashFiction,
    target: "https://www.jerseydevilpress.com/?page_id=%208020",
  },
  {
    title: "You and Me, on a Train, Chewing Gum",
    repubDetails: "Published in Wizards in Space, issue 5, in March 2020",
    pubDetails: "Published in Yours Truly Zine, in May 2019",
    storyType: storyTypes.flashFiction,
    target: "https://www.wizardsinspacemag.com/read/2020/9/30/you-and-me-on-a-train-chewing-gum",
  },
  {
    title: "Red Bill's Blood Quest",
    pubDetails: "Published in Barren Magazine, issue 7, in March 2019",
    storyType: storyTypes.shortStory,
    target: "https://barrenmagazine.com/red-bills-blood-quest/",
  },
  {
    title: "Cotton Cobwebs",
    pubDetails: "Published in Shirley Magazine, issue 13, in April 2019",
    storyType: storyTypes.flashFiction,
    target: "https://static1.squarespace.com/static/5415c66be4b083b6212c9bec/t/5ea5cdadee8832657c87dddc/1587924409677/ISSUE+13+ARCHIVE.pdf"
  },
  {
    title: "The Embassy",
    pubDetails: "Published in Allegory, Volume 37/64, in May 2020",
    storyType: storyTypes.shortStory,
  },
  {
    title: "Holy Ground",
    awards: "Finalist for the 2017 Barry Hannah Prize for Fiction",
    storyType: storyTypes.shortStory,
  },
];
