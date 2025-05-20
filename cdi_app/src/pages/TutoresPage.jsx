// src/pages/TutoresPage.jsx
import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Input,
  FloatButton,
  message,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import apiService from "../service/apiService"; // asegúrate de que esta ruta sea correcta

const TutoresPage = () => {
  const [form] = Form.useForm();
  const [tutores, setTutores] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingKey, setEditingKey] = useState(null);
  const [searchText, setSearchText] = useState("");

  const fetchTutores = async () => {
    try {
      const data = await apiService.getAll("/children");
      setTutores(data);
    } catch (err) {
      message.error("Error al cargar los tutores");
    }
  };

  useEffect(() => {
    fetchTutores();
  }, []);

  const showModal = (record = null) => {
    setIsModalOpen(true);
    if (record) {
      form.setFieldsValue(record);
      setEditingKey(record.id);
    } else {
      form.resetFields();
      setEditingKey(null);
    }
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (editingKey) {
        await apiService.update("/children", editingKey, values);
        message.success("Tutor actualizado correctamente");
      } else {
        await apiService.create("/children", values);
        message.success("Tutor creado correctamente");
      }
      setIsModalOpen(false);
      fetchTutores();
    } catch (error) {
      message.error("Error al guardar el tutor");
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiService.delete("/children", id);
      message.success("Tutor eliminado correctamente");
      fetchTutores();
    } catch (error) {
      message.error("Error al eliminar");
    }
  };

  const filteredTutores = tutores.filter((tutor) =>
    tutor.full_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ padding: 24 }}>
      <Input.Search
        placeholder="Buscar tutor..."
        onSearch={(value) => setSearchText(value)}
        style={{ maxWidth: 400, marginBottom: 20 }}
        allowClear
      />

      <Row gutter={[16, 16]}>
        {filteredTutores.map((tutor) => (
          <Col xs={24} sm={12} md={8} lg={6} key={tutor.id}>
            <Card
              style={{ backgroundColor: "#003b4f", color: "white", borderRadius: 10 }}
              bodyStyle={{ textAlign: "center" }}
              actions={[
                <EditOutlined key="edit" onClick={() => showModal(tutor)} />,
                <DeleteOutlined key="delete" onClick={() => handleDelete(tutor.id)} />,
              ]}
            >
              <UserOutlined style={{ fontSize: 40, color: "white" }} />
              <h3 style={{ color: "white" }}>{tutor.full_name}</h3>
              <p style={{ color: "white", margin: 0 }}>NUI: {tutor.nui}</p>
              <p style={{ color: "white", margin: 0 }}>Nacimiento: {tutor.birthdate}</p>
              <p style={{ color: "white", margin: 0 }}>Sexo: {tutor.gender}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <FloatButton
        icon={<PlusOutlined />}
        style={{ right: 24, bottom: 24 }}
        onClick={() => showModal()}
        type="primary"
      />

      <Modal
        title={editingKey ? "Editar Tutor" : "Nuevo Tutor"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleOk}
        okText={editingKey ? "Actualizar" : "Agregar"}
      >
        <Form layout="vertical" form={form}>
          <Form.Item label="Nombre completo" name="full_name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="NUI" name="nui" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Fecha nacimiento" name="birthdate" rules={[{ required: true }]}>
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Sexo" name="gender">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TutoresPage;
