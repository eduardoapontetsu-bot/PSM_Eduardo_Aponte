import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [visits, setVisits] = useState(0)
    const [selectedRegion, setSelectedRegion] = useState('Todas')

    // URL del logo en la carpeta /public
    const logoUrl = "/logo.png"

    useEffect(() => {
        const storedVisits = localStorage.getItem('psm_page_visits')
        let currentVisits = 1

        if (storedVisits) {
            currentVisits = parseInt(storedVisits, 10) + 1
        }

        localStorage.setItem('psm_page_visits', currentVisits.toString())
        setVisits(currentVisits)
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        if (username.trim() && password.trim()) {
            setIsLoggedIn(true)
        }
    }

    const sedesData = [
        { region: 'Sede Principal', nombre: 'Barcelona', estado: 'Estado Anzoátegui', tipo: 'Sede Principal', color: '#ff9900' },
        { region: 'Región Central', nombre: 'Extensión Valencia', estado: 'Carabobo', tipo: 'Extensión', color: '#0055a5' },
        { region: 'Región Central', nombre: 'Extensión Maracay', estado: 'Aragua', tipo: 'Extensión', color: '#0055a5' },
        { region: 'Región Capital y Central', nombre: 'Extensión Caracas', estado: 'Miranda / Distrito Capital', tipo: 'Extensión', color: '#003366' },
        { region: 'Región Occidental', nombre: 'Extensión Maracaibo', estado: 'Zulia', tipo: 'Extensión', color: '#16a085' },
        { region: 'Región Occidental', nombre: 'Extensión Cabimas', estado: 'Zulia', tipo: 'Extensión', color: '#16a085' },
        { region: 'Región Occidental', nombre: 'Extensión Ciudad Ojeda', estado: 'Zulia', tipo: 'Extensión', color: '#16a085' },
        { region: 'Región Andina y Los Llanos', nombre: 'Extensión Mérida', estado: 'Mérida', tipo: 'Extensión', color: '#27ae60' },
        { region: 'Región Andina y Los Llanos', nombre: 'Extensión San Cristóbal', estado: 'Táchira', tipo: 'Extensión', color: '#27ae60' },
        { region: 'Región Andina y Los Llanos', nombre: 'Extensión Barinas', estado: 'Barinas', tipo: 'Extensión', color: '#27ae60' },
        { region: 'Región Oriental y Sur', nombre: 'Extensión Porlamar', estado: 'Nueva Esparta', tipo: 'Extensión', color: '#e67e22' },
        { region: 'Región Oriental y Sur', nombre: 'Extensión Puerto Ordaz', estado: 'Bolívar', tipo: 'Extensión', color: '#e67e22' },
        { region: 'Región Oriental y Sur', nombre: 'Extensión Maturín', estado: 'Monagas', tipo: 'Extensión', color: '#e67e22' }
    ]

    const carrerasData = [
        ['ARQ-41', 'Arquitectura', 'Diseño y Edificación'],
        ['ING-42', 'Ingeniería Civil', 'Infraestructura y Construcción'],
        ['ING-43', 'Ingeniería de Sistemas', 'Tecnología y Software'],
        ['ING-44', 'Ingeniería Industrial', 'Gestión y Optimización'],
        ['ING-45', 'Ingeniería Eléctrica', 'Energía y Sistemas Eléctricos'],
        ['ING-46', 'Ingeniería Electrónica', 'Automatización y Circuitos'],
        ['ING-47', 'Ingeniería en Mantenimiento Mecánico', 'Maquinaria e Industria'],
        ['ING-48', 'Ingeniería de Diseño Industrial', 'Innovación de Producto'],
        ['ING-49', 'Ingeniería de Producción', 'Procesos Industriales']
    ]

    const regiones = ['Todas', 'Sede Principal', 'Región Central', 'Región Capital y Central', 'Región Occidental', 'Región Andina y Los Llanos', 'Región Oriental y Sur']

    const filteredSedes = selectedRegion === 'Todas'
        ? sedesData
        : sedesData.filter(s => s.region === selectedRegion)

    return (
        <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f9', minHeight: '100vh', color: '#333' }}>

            {/* BANNER PRINCIPAL */}
            <header style={{
                background: 'linear-gradient(135deg, #002244 0%, #004488 50%, #ff9900 100%)',
                color: 'white',
                padding: '2rem 1rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Corregido: justifyContent
                gap: '1.5rem',
                flexWrap: 'wrap'
            }}>
                <img
                    src={logoUrl}
                    alt="Logo Politécnico Santiago Mariño"
                    style={{ height: '90px', width: 'auto', filter: 'drop-shadow(0px 2px 6px rgba(0,0,0,0.4))' }}
                />
                <div style={{ textAlign: 'left' }}>
                    <h1 style={{ fontSize: '2.2rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Politécnico Santiago Mariño
                    </h1>
                    <p style={{ margin: '0.3rem 0 0 0', opacity: 0.95, fontSize: '1.1rem', fontWeight: '300' }}>
                        Inteligencia Artificial y Excelencia Académica
                    </p>
                </div>
            </header>

            {/* VISTA DE LOGIN / CONTENIDO */}
            {!isLoggedIn ? (
                <div style={{ maxWidth: '420px', margin: '3rem auto', padding: '2.5rem 2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                    <img src={logoUrl} alt="PSM Logo" style={{ height: '70px', marginBottom: '1rem' }} />
                    <h2 style={{ color: '#003366', marginBottom: '0.5rem' }}>Inicio de Sesión</h2>
                    <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#666' }}>Ingrese sus datos para acceder al portal interactivo.</p>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Usuario / Correo"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem' }}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '0.8rem', marginBottom: '1.2rem', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem' }}
                        />
                        <button type="submit" style={{ width: '100%', background: '#003366', color: 'white', border: 'none', padding: '0.9rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
                            Iniciar y Continuar
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    {/* BARRA DE NAVEGACIÓN */}
                    <nav style={{ background: '#001c3d', padding: '0.8rem 1rem', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                        <ul style={{ display: 'flex', justifyContent: 'center', gap: '1.8rem', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap' }}>
                            <li><a href="#ia-info" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>Inteligencia Artificial</a></li>
                            <li><a href="#ventajas" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>Ventajas PSM</a></li>
                            <li><a href="#carreras" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>Carreras</a></li>
                            <li><a href="#multimedia" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>Multimedia</a></li>
                            <li><a href="#inscripciones" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>Inscripciones 2026-2</a></li>
                            <li><a href="#sedes" style={{ color: '#ff9900', textDecoration: 'none', fontWeight: 'bold' }}>Sedes y Extensiones</a></li>
                        </ul>
                    </nav>

                    <main style={{ maxWidth: '1150px', margin: '2rem auto', padding: '0 1.5rem' }}>

                        {/* SECCIÓN INTELIGENCIA ARTIFICIAL */}
                        <section id="ia-info" style={{ background: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                            <h2 style={{ color: '#003366', borderBottom: '3px solid #ff9900', paddingBottom: '0.3rem', display: 'inline-block' }}>Uso de la Inteligencia Artificial y sus Ventajas</h2>
                            <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>La IA revoluciona el ámbito académico permitiendo optimizar el aprendizaje personalizado, automatizar procesos complejos de investigación y mejorar el análisis de datos en las distintas disciplinas de la ingeniería y arquitectura.</p>
                        </section>

                        {/* SECCIÓN VENTAJAS PSM */}
                        <section id="ventajas" style={{ background: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                            <h2 style={{ color: '#003366', borderBottom: '3px solid #ff9900', paddingBottom: '0.3rem', display: 'inline-block' }}>Ventajas de Estudiar en el PSM</h2>
                            <ol style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                <li>Formación académica orientada a las exigencias del mercado laboral moderno.</li>
                                <li>Plataforma tecnológica avanzada para educación presencial y a distancia (SAIA).</li>
                                <li>Cuerpo docente highly cualificado en ingeniería y arquitectura.</li>
                                <li>Presencia a nivel nacional con múltiple red de sedes y extensiones equipadas.</li>
                                <li>Fomento del desarrollo de proyectos de innovación tecnológica.</li>
                            </ol>
                        </section>

                        {/* SECCIÓN CARRERAS */}
                        <section id="carreras" style={{ background: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                            <h2 style={{ color: '#003366', borderBottom: '3px solid #ff9900', paddingBottom: '0.3rem', display: 'inline-block' }}>Oferta Académica PSM</h2>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                                    <thead>
                                        <tr style={{ background: '#003366', color: 'white' }}>
                                            <th style={{ padding: '0.9rem', border: '1px solid #ddd', textAlign: 'left' }}>Código</th>
                                            <th style={{ padding: '0.9rem', border: '1px solid #ddd', textAlign: 'left' }}>Carrera</th>
                                            <th style={{ padding: '0.9rem', border: '1px solid #ddd', textAlign: 'left' }}>Área</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carrerasData.map((row, idx) => (
                                            <tr key={idx} style={{ background: idx % 2 === 0 ? '#f9f9f9' : 'white' }}>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold' }}>{row[0]}</td>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>{row[1]}</td>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>{row[2]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* SECCIÓN MULTIMEDIA */}
                        <section id="multimedia" style={{ background: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                            <h2 style={{ color: '#003366', borderBottom: '3px solid #ff9900', paddingBottom: '0.3rem', display: 'inline-block' }}>Modelado Multimedia</h2>
                            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1.5rem', justifyContent: 'center' }}>
                                <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                                    <h3 style={{ fontSize: '1.1rem', color: '#003366', marginBottom: '0.5rem' }}>Video de Presentación Institucional</h3>

                                    {/* VIDEO LOCAL */}
                                    <video controls style={{ width: '100%', maxWidth: '420px', borderRadius: '6px' }}>
                                        <source src="/mi-video-psm.mp4" type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                </div>
                                    {/* AUDIO OFERTA ACADÉMICA PSM */}
                                    <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', border: '1px solid #e0e0e0', minWidth: '300px' }}>
                                        <h3 style={{ fontSize: '1.1rem', color: '#003366', marginBottom: '0.5rem' }}>Audio Informativo (Carreras PSM)</h3>
                                        <audio controls style={{ width: '100%', marginTop: '1rem' }}>
                                            <source src="/mi-audio-psm.mp3" type="audio/mpeg" />
                                            Tu navegador no soporta el elemento de audio.
                                        </audio>
                                    </div>
                            </div>
                        </section>

                        {/* SECCIÓN INSCRIPCIONES */}
                        <section id="inscripciones" style={{ background: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                            <h2 style={{ color: '#003366', borderBottom: '3px solid #ff9900', paddingBottom: '0.3rem', display: 'inline-block' }}>Almanaque de Inscripciones 2026-2</h2>
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                                <thead>
                                    <tr style={{ background: '#003366', color: 'white' }}>
                                        <th style={{ padding: '0.9rem', border: '1px solid #ddd', textAlign: 'left' }}>Fase</th>
                                        <th style={{ padding: '0.9rem', border: '1px solid #ddd', textAlign: 'left' }}>Fechas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>Censo de Nuevos Ingresos</td>
                                        <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>01 - 15 Septiembre 2026</td>
                                    </tr>
                                    <tr style={{ background: '#f9f9f9' }}>
                                        <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>Inscripción Regular 2026-2</td>
                                        <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>01 - 15 Octubre 2026</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold', color: '#003366' }}>Inicio de Clases</td>
                                        <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold' }}>20 de Octubre 2026</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        {/* SECCIÓN SEDES Y EXTENSIONES */}
                        <section id="sedes" style={{ background: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                            <div style={{
                                background: 'linear-gradient(90deg, #003366 0%, #0055a5 100%)',
                                color: 'white',
                                padding: '1.5rem 2rem',
                                borderRadius: '8px',
                                marginBottom: '1.8rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                flexWrap: 'wrap'
                            }}>
                                <img src={logoUrl} alt="PSM Logo" style={{ height: '65px', background: 'white', padding: '4px', borderRadius: '50%' }} />
                                <div>
                                    <h2 style={{ margin: 0, fontSize: '1.6rem', color: '#ff9900' }}>Red Nacional de Sedes y Extensiones PSM</h2>
                                    <p style={{ margin: '0.3rem 0 0 0', opacity: 0.9 }}>Presencia estratégica en las regiones del país.</p>
                                </div>
                            </div>

                            {/* FILTROS */}
                            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                                <span style={{ fontWeight: 'bold', color: '#003366' }}>Filtrar por Región:</span>
                                {regiones.map((reg, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedRegion(reg)}
                                        style={{
                                            background: selectedRegion === reg ? '#003366' : '#eef2f7',
                                            color: selectedRegion === reg ? 'white' : '#333',
                                            border: '1px solid #003366',
                                            padding: '0.4rem 0.9rem',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            fontSize: '0.85rem',
                                            fontWeight: selectedRegion === reg ? 'bold' : 'normal'
                                        }}
                                    >
                                        {reg}
                                    </button>
                                ))}
                            </div>

                            {/* TARJETAS */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
                                {filteredSedes.map((sede, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            borderLeft: `5px solid ${sede.color}`,
                                            background: '#f8fafc',
                                            padding: '1.2rem',
                                            borderRadius: '8px',
                                            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between' // Corregido: justifyContent
                                        }}
                                    >
                                        <div>
                                            <span style={{
                                                background: sede.tipo === 'Sede Principal' ? '#ff9900' : '#e0eaf4',
                                                color: sede.tipo === 'Sede Principal' ? 'white' : '#003366',
                                                fontSize: '0.75rem',
                                                fontWeight: 'bold',
                                                padding: '0.2rem 0.6rem',
                                                borderRadius: '12px',
                                                display: 'inline-block',
                                                marginBottom: '0.5rem'
                                            }}>
                                                {sede.tipo}
                                            </span>
                                            <h3 style={{ margin: '0.2rem 0', color: '#003366', fontSize: '1.2rem' }}>{sede.nombre}</h3>
                                            <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>📍 {sede.estado}</p>
                                        </div>
                                        <div style={{ marginTop: '0.8rem', borderTop: '1px solid #eee', paddingTop: '0.5rem', fontSize: '0.8rem', color: '#888' }}>
                                            {sede.region}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* MAPA */}
                            <h3 style={{ color: '#003366', marginBottom: '0.8rem' }}>Ubicación Geográfica en Mapa</h3>
                            <div style={{ height: '320px', width: '100%' }}>
                                <iframe
                                    title="Sedes PSM Venezuela"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.375681640954!2d-64.6958!3d10.1367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA4JzEy.MSJOIDY0wrA0MSc0NC45Ilc!5e0!3m2!1ses!2sve!4v1680000000000!5m2!1ses!2sve"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: '8px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                        </section>

                    </main>

                    {/* PIE DE PÁGINA */}
                    <footer style={{ background: '#001c3d', color: 'white', textAlign: 'center', padding: '2.5rem 1rem', marginTop: '3rem' }}>
                        <img src={logoUrl} alt="PSM Logo" style={{ height: '60px', marginBottom: '1rem' }} />
                        <br />
                        <p style={{ background: '#003366', display: 'inline-block', padding: '0.6rem 1.4rem', borderRadius: '20px', fontWeight: 'bold' }}>
                            Visitas a la página: {visits}
                        </p>
                        <br /><br />
                        <p style={{ fontSize: '1.05rem' }}><strong>Proyecto Web Interactivo - Instituto Universitario Politécnico Santiago Mariño</strong></p>
                        <p><strong>Estudiante:</strong> Eduardo Aponte</p>
                        <p><strong>Cédula:</strong> 17.790.987</p>
                        <p><strong>Sede / Extensión:</strong> Caracas / Maracaibo / Porlamar</p>
                    </footer>
                </div>
            )}
        </div>
    )
}