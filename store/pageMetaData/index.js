export const state = () => ({
  pageTitle: "K-ANS CaseWork ECon System",
});

export const mutations = {
  updatePageTitle(state, pageTitle) {
    state.pageTitle = pageTitle;
  },
};
