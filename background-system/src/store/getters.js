const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  name: (state) => state.user.name,
  user: (state) => state.user.user,
};
export default getters;
