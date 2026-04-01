import { configureStore } from '@reduxjs/toolkit';
// Aquí importaremos los reducers más adelante (ej: uiSlice, projectsSlice)
import uiReducer from '../features/ui/uiSlice' // Importamos el que acabas de crear

export const store = configureStore({
  reducer: {
    ui: uiReducer, // Ahora el store ya tiene un objeto válido
  },
});