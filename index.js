const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('Escanea este código QR con tu WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Cliente listo para recibir mensajes.');
});

// Estado de cada usuario
const usuarios = {};

// Funciones de menú
function mostrarMenuPrincipal() {
    return `🏫 *Instituto Técnico Tecnológico Simón Bolívar*
📍 Sede: La Paz
📆 Inicio de clases: Febrero 2025
📢 Inscripciones abiertas

¿Qué deseas hacer?
1️⃣ Ver carreras
2️⃣ Requisitos de inscripción
3️⃣ Ver ubicación y teléfonos
4️⃣ Contactar con secretaria`;
}

function mostrarMenuCarreras() {
    return `📚 *Carreras disponibles:*

1️⃣ Mecánica Automotriz  
2️⃣ Autotrónica  
3️⃣ Maquinaria Pesada

Escribe el número para ver detalles o "menú" para volver al inicio.`;
}

// --- Detalles y Pensum: MECÁNICA AUTOMOTRIZ ---
function mostrarDetalleMecanica() {
    return `🚗 *Mecánica Automotriz*

Formación práctica en diagnóstico, mantenimiento y reparación de vehículos con tecnología actual.

🎓 Técnico Superior | 3 años (6 semestres) | Presencial  
🕘 Horarios: 08:00-12:30 / 14:00-18:30 / 18:30-22:00  
📍 Sede: La Paz

¿Qué deseas hacer?  
1️⃣ Ver pensum  
2️⃣ Inscribirme  
3️⃣ Volver al menú de carreras  
4️⃣ Volver al menú principal`;
}

function mostrarPensumMecanica() {
    return `📘 *Pensum - Mecánica Automotriz* (6 semestres)

📅 1er semestre:
• Seguridad Ocupacional y Medio Ambiente  
• Motores a Gasolina I  
• Electricidad Automotriz I  
• Matemática Automotriz  
• Dibujo Técnico Automotriz I  
• Química Automotriz  
• Inglés Técnico

📅 2do semestre:
• Motores a Gasolina II  
• Electricidad Automotriz II  
• Electrónica Básica  
• Transmisión y Embrague  
• Dibujo Técnico Automotriz II  
• Computación Aplicada

📅 3er semestre:
• Sistemas de Inyección Electrónica  
• Frenos y Suspensión  
• Caja de Cambios y Diferenciales  
• Diagnóstico por Scanner  
• Mecánica General  
• Ética Profesional

📅 4to semestre:
• Motores Diésel  
• Sistemas de Enfriamiento y Lubricación  
• Dirección Hidráulica  
• Administración Automotriz  
• Legislación Técnica  
• Prácticas de Taller

📅 5to semestre:
• Gestión de Talleres  
• Diagnóstico Avanzado  
• Electricidad Automotriz III  
• Motores Multiválvulas  
• Sistemas de Escape  
• Seminario Técnico

📅 6to semestre:
• Mantenimiento Preventivo y Correctivo  
• Sistemas Electrónicos del Vehículo  
• Proyecto Técnico  
• Práctica Profesional  
• Evaluación Final de Competencias

✨ ¿Qué deseas hacer ahora?  
1️⃣ Volver al menú de carreras  
2️⃣ Volver al menú principal`;
}

// --- Detalles y Pensum: AUTOTRÓNICA ---
function mostrarDetalleAutotronica() {
    return `⚡ *Autotrónica*

Especialización en electrónica y sistemas computarizados de vehículos modernos, con enfoque en diagnóstico y reparación avanzada.

🎓 Técnico Superior | 3 años (6 semestres) | Presencial  
🕘 Horarios: 08:00-12:30 / 14:00-18:30 / 18:30-22:00  
📍 Sede: La Paz

¿Qué deseas hacer?  
1️⃣ Ver pensum  
2️⃣ Inscribirme  
3️⃣ Volver al menú de carreras  
4️⃣ Volver al menú principal`;
}

function mostrarPensumAutotronica() {
    return `📘 *Pensum - Autotrónica* (6 semestres)

📅 1er semestre:
• Fundamentos de Electrónica  
• Electricidad Automotriz I  
• Matemática Aplicada  
• Introducción a la Autotrónica  
• Dibujo Técnico  
• Informática Básica  
• Inglés Técnico

📅 2do semestre:
• Electricidad Automotriz II  
• Electrónica Analógica  
• Instrumentación Automotriz  
• Sensores y Actuadores  
• Estadística Aplicada  
• Comunicación Técnica

📅 3er semestre:
• Electrónica Digital  
• Sistemas de Inyección Electrónica  
• Diagnóstico Computarizado I  
• Sistemas de Frenado ABS  
• Ética Profesional  
• Prácticas de Taller I

📅 4to semestre:
• Redes CAN y Sistemas Multiplex  
• Diagnóstico Computarizado II  
• Electrónica de Potencia  
• Sistemas de Seguridad Vehicular  
• Legislación Técnica  
• Prácticas de Taller II

📅 5to semestre:
• Gestión Electrónica de Motores  
• Programación de Módulos ECU  
• Sistemas Híbridos  
• Mantenimiento Electrónico  
• Seminario Técnico  
• Gestión de Proyectos

📅 6to semestre:
• Proyecto Técnico  
• Práctica Profesional  
• Evaluación Final de Competencias  
• Innovación Tecnológica  
• Auditoría Técnica Electrónica

✨ ¿Qué deseas hacer ahora?  
1️⃣ Volver al menú de carreras  
2️⃣ Volver al menú principal`;
}

// --- Detalles y Pensum: MAQUINARIA PESADA ---
function mostrarDetalleMaquinaria() {
    return `🚜 *Maquinaria Pesada*

Formación técnica en operación, mantenimiento y reparación de maquinaria para construcción, minería y obras viales.

🎓 Técnico Superior | 3 años (6 semestres) | Presencial  
🕘 Horarios: 08:00-12:30 / 14:00-18:30 / 18:30-22:00  
📍 Sede: La Paz

¿Qué deseas hacer?  
1️⃣ Ver pensum  
2️⃣ Inscribirme  
3️⃣ Volver al menú de carreras  
4️⃣ Volver al menú principal`;
}

function mostrarPensumMaquinaria() {
    return `📘 *Pensum - Maquinaria Pesada* (6 semestres)

📅 1er semestre:
• Introducción a la Maquinaria Pesada  
• Motores Diésel I  
• Seguridad Industrial  
• Matemática Técnica  
• Dibujo Técnico  
• Química Aplicada  
• Inglés Técnico

📅 2do semestre:
• Motores Diésel II  
• Sistemas Hidráulicos I  
• Transmisiones Mecánicas  
• Electricidad Básica  
• Computación Aplicada  
• Mecánica Básica

📅 3er semestre:
• Sistemas Hidráulicos II  
• Tren de Fuerza  
• Sistemas de Frenado  
• Electrónica Básica  
• Ética Profesional  
• Prácticas de Campo I

📅 4to semestre:
• Diagnóstico de Fallas  
• Mantenimiento Preventivo  
• Legislación Técnica  
• Administración de Talleres  
• Sistemas de Dirección  
• Prácticas de Campo II

📅 5to semestre:
• Operación de Maquinaria  
• Instrumentación y Control  
• Gestión de Equipos Pesados  
• Seminario Técnico  
• Medio Ambiente y Maquinaria

📅 6to semestre:
• Proyecto Técnico  
• Práctica Profesional  
• Evaluación Final de Competencias  
• Innovación y Tecnología Aplicada  
• Auditoría Técnica

✨ ¿Qué deseas hacer ahora?  
1️⃣ Volver al menú de carreras  
2️⃣ Volver al menú principal`;
}

// --- Lógica de mensajes ---
client.on('message', async msg => {
    const chatId = msg.from;
    const texto = msg.body.trim().toLowerCase();

    if (!usuarios[chatId]) {
        usuarios[chatId] = { estado: 'inicio', datosPreinscripcion: {} };
        await client.sendMessage(chatId, mostrarMenuPrincipal());
        return;
    }

    const estado = usuarios[chatId].estado;

    async function enviarMensaje(textoRespuesta, nuevoEstado) {
        await client.sendMessage(chatId, textoRespuesta);
        if (nuevoEstado) usuarios[chatId].estado = nuevoEstado;
    }

    switch (estado) {
        case 'inicio':
            if (texto === '1') await enviarMensaje(mostrarMenuCarreras(), 'menuCarreras');
            else if (texto === '2') await enviarMensaje(`📋 *Requisitos de inscripción:*
1. Fotocopia de cédula de identidad
2. Fotocopia de título de bachiller
3. Fotocopia de certificado de nacimiento
4. Seguro contra accidentes

Escribe "menú" para volver al inicio.`, 'inicio');
            else if (texto === '3') await enviarMensaje(`📍 *Ubicación y teléfonos:*
Av. Sucre N.º 1423, La Paz, Bolivia  
Av. Sucre Esq. Loayza N.º 1402, La Paz, Bolivia

☎️ Secretaría: 2281885 / 76797193

Escribe "menú" para volver al inicio.`, 'inicio');
            else if (texto === '4') await enviarMensaje(`☎️ Puedes contactar a la secretaria en horarios:
🕘 8:30 a.m - 12:00 p.m  
🕓 4:00 p.m - 8:30 p.m

📞 Teléfono: 2281885

Escribe "menú" para volver al inicio.`, 'inicio');
            else if (texto === 'menú' || texto === 'menu') await enviarMensaje(mostrarMenuPrincipal(), 'inicio');
            else await enviarMensaje(`❌ Opción inválida. Por favor, elige una opción válida:\n\n` + mostrarMenuPrincipal(), 'inicio');
            break;

        case 'menuCarreras':
            if (texto === '1') await enviarMensaje(mostrarDetalleMecanica(), 'detalleMecanica');
            else if (texto === '2') await enviarMensaje(mostrarDetalleAutotronica(), 'detalleAutotronica');
            else if (texto === '3') await enviarMensaje(mostrarDetalleMaquinaria(), 'detalleMaquinaria');
            else if (texto === 'menú' || texto === 'menu') await enviarMensaje(mostrarMenuPrincipal(), 'inicio');
            else await enviarMensaje(`❌ Opción inválida. Elige 1, 2 o 3:\n\n` + mostrarMenuCarreras(), 'menuCarreras');
            break;

        case 'detalleMecanica':
            if (texto === '1') await enviarMensaje(mostrarPensumMecanica(), 'pensumMecanica');
            else if (texto === '2') {
                usuarios[chatId].estado = 'preinscripcion';
                usuarios[chatId].datosPreinscripcion.carrera = 'Mecánica Automotriz';
                await enviarMensaje(`✅ *Preinscripción para Mecánica Automotriz*

Por favor, envíanos los siguientes datos:
1. Nombre completo  
2. Número de celular  
3. Turno (mañana, tarde o noche)

📩 Escribe todo en un solo mensaje.`, 'preinscripcion');
            } else if (texto === '3') await enviarMensaje(mostrarMenuCarreras(), 'menuCarreras');
            else if (texto === '4') await enviarMensaje(mostrarMenuPrincipal(), 'inicio');
            else await enviarMensaje(`❌ Opción inválida. Elige una opción válida:\n` + mostrarDetalleMecanica(), 'detalleMecanica');
            break;

        case 'pensumMecanica':
        case 'pensumAutotronica':
        case 'pensumMaquinaria':
            if (texto === '1') await enviarMensaje(mostrarMenuCarreras(), 'menuCarreras');
            else if (texto === '2') await enviarMensaje(mostrarMenuPrincipal(), 'inicio');
            else await enviarMensaje(`❌ Opción inválida. Intenta de nuevo:\n` +
                (estado === 'pensumMecanica' ? mostrarPensumMecanica() :
                 estado === 'pensumAutotronica' ? mostrarPensumAutotronica() :
                 mostrarPensumMaquinaria()), estado);
            break;

        case 'detalleAutotronica':
            if (texto === '1') await enviarMensaje(mostrarPensumAutotronica(), 'pensumAutotronica');
            else if (texto === '2') {
                usuarios[chatId].estado = 'preinscripcion';
                usuarios[chatId].datosPreinscripcion.carrera = 'Autotrónica';
                await enviarMensaje(`✅ *Preinscripción para Autotrónica*

Por favor, envíanos los siguientes datos:
1. Nombre completo  
2. Número de celular  
3. Turno (mañana, tarde o noche)

📩 Escribe todo en un solo mensaje.`, 'preinscripcion');
            } else if (texto === '3') await enviarMensaje(mostrarMenuCarreras(), 'menuCarreras');
            else if (texto === '4') await enviarMensaje(mostrarMenuPrincipal(), 'inicio');
            else await enviarMensaje(`❌ Opción inválida. Intenta de nuevo:\n` + mostrarDetalleAutotronica(), 'detalleAutotronica');
            break;

        case 'detalleMaquinaria':
            if (texto === '1') await enviarMensaje(mostrarPensumMaquinaria(), 'pensumMaquinaria');
            else if (texto === '2') {
                usuarios[chatId].estado = 'preinscripcion';
                usuarios[chatId].datosPreinscripcion.carrera = 'Maquinaria Pesada';
                await enviarMensaje(`✅ *Preinscripción para Maquinaria Pesada*

Por favor, envíanos los siguientes datos:
1. Nombre completo  
2. Número de celular  
3. Turno (mañana, tarde o noche)

📩 Escribe todo en un solo mensaje.`, 'preinscripcion');
            } else if (texto === '3') await enviarMensaje(mostrarMenuCarreras(), 'menuCarreras');
            else if (texto === '4') await enviarMensaje(mostrarMenuPrincipal(), 'inicio');
            else await enviarMensaje(`❌ Opción inválida. Intenta de nuevo:\n` + mostrarDetalleMaquinaria(), 'detalleMaquinaria');
            break;

        case 'preinscripcion':
            usuarios[chatId].datosPreinscripcion.info = msg.body;
            await enviarMensaje(`✅ *Gracias por registrarte*. Pronto un asesor se comunicará contigo.

Escribe "menú" para volver al inicio.`, 'inicio');
            break;

        default:
            await enviarMensaje(mostrarMenuPrincipal(), 'inicio');
            break;
    }
});

// Iniciar cliente
client.initialize();
