import usefulLinksComanyItems from "./UsefulLinksCompany.item";

export const getCompanyUsefulLinks = async () => {
  try {
    return usefulLinksComanyItems;
  } catch (error) {
    console.error('Error while fetching useful links for company search:', error);
    return [];
  }
};