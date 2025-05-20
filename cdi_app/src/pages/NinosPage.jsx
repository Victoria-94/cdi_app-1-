import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Popconfirm } from "antd";
import { PlusCircleFilled, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const NinosPage = () => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([
    { key: "1", nombre: "Nombre 1", progreso: "Bueno", numero: "21001", EvaluacionPage:" "},
    { key: "2", nombre: "Nombre 2", progreso: "Regular", numero: "21002", EvaluacionPage:" "},
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingKey, setEditingKey] = useState(null);

  const showModal = (record = null) => {
    setIsModalOpen(true);
    if (record) {
      form.setFieldsValue(record);
      setEditingKey(record.key);
    } else {
      form.resetFields();
      setEditingKey(null);
    }
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (editingKey) {
        setDataSource(prev =>
          prev.map(item => (item.key === editingKey ? { ...item, ...values, key: editingKey } : item))
        );
      } else {
        const newKey = Date.now().toString();
        setDataSource(prev => [...prev, { ...values, key: newKey }]);
      }
      setIsModalOpen(false);
    });
  };

  const handleDelete = key => {
    setDataSource(prev => prev.filter(item => item.key !== key));
  };

  const columns = [
    { title: "Nombre", dataIndex: "nombre" },
    { title: "Progreso", dataIndex: "progreso" },
    { title: "N°", dataIndex: "numero" },
    { title: "Evaluacion", dataIndex:" Evaluacion"},
    {
      title: "Acciones",
      render: (_, record) => (
        <>
          <Button icon={<EditOutlined />} onClick={() => showModal(record)} style={{ marginRight: 8 }} />
          <Popconfirm title="¿Eliminar este niño?" onConfirm={() => handleDelete(record.key)}>
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </>
      )
    }
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} rowKey="key" />
      <Button
        type="primary"
        shape="circle"
        icon={<PlusCircleFilled />}
        size="large"
        onClick={() => showModal()}
        style={{ position: "fixed", right: 30, bottom: 30, background: "#fadb14" }}
      />
      <Modal
        title={editingKey ? "Editar Niño" : "Nuevo Niño"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleOk}
        okText={editingKey ? "Actualizar" : "Agregar"}
      >
        <Form layout="vertical" form={form}>
          <Form.Item label="Nombre" name="nombre" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="Progreso" name="progreso"><Input /></Form.Item>
          <Form.Item label="N°" name="numero"><Input /></Form.Item>
          <Form.Item label= " evaluacion" name= "evaluacion"></Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NinosPage;
