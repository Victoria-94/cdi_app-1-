import React from "react";
import { Form, Input, Table, Button } from "antd";

const EvaluacionPage = () => {
  const columns = [
    { title: "#", dataIndex: "numero" },
    { title: "Área de Dominio", dataIndex: "dominio" },
    { title: "Área Refuerzo", dataIndex: "refuerzo" },
  ];

  const data = [
    { key: "1", numero: 3, dominio: "Compara 2 Líneas", refuerzo: "Repite Sílabas" },
    { key: "2", numero: 4, dominio: "Copia Un Círculo", refuerzo: "Responde A 3 Preposiciones" },
  ];

  return (
    <Form layout="vertical">
      <Form.Item label="Nombre"><Input /></Form.Item>
      <Form.Item label="Fecha de Nacimiento"><Input /></Form.Item>
      <Form.Item label="Fecha de Evaluación"><Input /></Form.Item>
      <Form.Item label="Edad Real"><Input /></Form.Item>
      <Form.Item label="Edad Desarrollo"><Input /></Form.Item>
      <Form.Item label="Coeficiente Desarrollo"><Input /></Form.Item>
      <Form.Item label="Nombre Representante"><Input /></Form.Item>
      <Form.Item label="Cel Representante"><Input /></Form.Item>

      <Table dataSource={data} columns={columns} pagination={false} style={{ marginBottom: 16 }} />

      <Form.Item label="Observaciones"><Input.TextArea rows={4} /></Form.Item>

      <Button type="primary">Guardar</Button>
    </Form>
  );
};

export default EvaluacionPage;