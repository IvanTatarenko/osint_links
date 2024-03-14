import helpItems from "./help.items";

export const getHelpItems = async () => {
  try {
    return helpItems;
  } catch (error) {
    console.error('Error while fetching help items:', error);
    return [];
  }
};