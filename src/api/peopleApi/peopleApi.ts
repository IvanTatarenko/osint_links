import usefulLinksPeopleItems from "./UsefulLinksPeople.items";

export const getPeopleUsefulLinks = async () => {
  try {
    return usefulLinksPeopleItems;
  } catch (error) {
    console.error('Error while fetching useful links for people search:', error);
    return [];
  }
};