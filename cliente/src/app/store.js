import { configureStore } from '@reduxjs/toolkit';
// Aquí importaremos los reducers más adelante (ej: uiSlice, projectsSlice)
import uiReducer from '../features/ui/uiSlice' // Importamos el que acabas de crear
import projectsReducer from '../features/projects/projectsSlice'; // Importa tu slice de proyectos cuando lo tengas listo

export const store = configureStore({
  reducer: {
    ui: uiReducer, // Ahora el store ya tiene un objeto válido
    projects: projectsReducer, // <--- Registrar el reducer de proyectos aquí cuando lo tengas listo
  },
});