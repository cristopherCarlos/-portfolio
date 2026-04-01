import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      title: "E-Commerce MERN",
      description: "Sistema de ventas con gestión de inventario y pagos integrados.",
      tech: ["MongoDB", "Express", "React", "Node"],
      link: "#",
      image: "https://placehold.co/400x250/1a1a2e/00d4ff?text=E-Commerce"
    },
    {
      id: 2,
      title: "Linux Server Monitor",
      description: "Dashboard en tiempo real para métricas de servidores Debian.",
      tech: ["Python", "React", "Socket.io"],
      link: "#",
      image: "https://placehold.co/400x250/1a1a2e/00d4ff?text=Server+Monitor"
    },
    // Agrega más aquí...
    {
      id: 3,
      title: "Linux Server Monitor",
      description: "Dashboard en tiempo real para métricas de servidores Debian.",
      tech: ["Python", "React", "Socket.io"],
      link: "#",
      image: "https://placehold.co/400x250/1a1a2e/00d4ff?text=Server+Monitor"
    },
  ],
  filter: 'all'
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { setFilter } = projectsSlice.actions;
export default projectsSlice.reducer;