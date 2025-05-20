const RenderPerfilTutor = (tutor) => (
    <Card title={`Perfil del Tutor: ${tutor.nombre}`} style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', gap: 24 }}>
        <img
          src={tutor.foto || "https://via.placeholder.com/120x120.png?text=Tutor"}
          alt="Foto del tutor"
          style={{ width: 120, height: 120, borderRadius: '8px', objectFit: 'cover' }}
        />
        <div>
          <p><strong>Nombre:</strong> {tutor.nombre}</p>
          <p><strong>Especialidad:</strong> {tutor.especialidad}</p>
          <p><strong>Curso / Nivel asignado:</strong> {tutor.nivel}</p>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <Button danger style={{ marginRight: 8 }} onClick={() => handleEliminarTutor(tutor.id)}>Eliminar</Button>
        <Button type="primary" onClick={() => {
          formEditarTutor.setFieldsValue(tutor);
          setModalEditarTutorVisible(true);
        }}>Editar</Button>
      </div>
      <Button onClick={() => setTutorSeleccionado(null)} style={{ marginTop: 10 }}>Volver al listado</Button>
    </Card>
  );

  export default RenderPerfilTutor