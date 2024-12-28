export function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    
    // Restar 5 horas
    fecha.setHours(fecha.getHours() - 5);
    
    const opciones = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'America/Lima' // Zona horaria de Perú
    };
  
    return fecha.toLocaleString('es-PE', opciones).replace(',', '');
  }