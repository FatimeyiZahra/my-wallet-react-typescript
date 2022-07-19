import { Form, Input, Modal, Select } from "antd";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { CategoryForm } from "../types/category";
import { Mode } from "./CategoryPage";

type ModalProps={
    mode: Mode;
    isModalVisible: boolean;
    handleOk: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined
    handleCancel: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined
    form: CategoryForm
    setForm: Dispatch<SetStateAction<CategoryForm>>
}
const ManageModal = ({mode,isModalVisible,handleOk,handleCancel,form,setForm}:ModalProps) => {
  return (
    <Modal
      title = {mode === "new" ? "CREATE NEW CATEGORY" : mode==="edit" ? "UPDATE CATEGORY":"DELETE CATEGORY"}
      visible = {isModalVisible}
      onOk = {handleOk}
      onCancel = {handleCancel}
      okButtonProps = {{ disabled:  !(mode === "delete") && !form.name }}
    >
      {mode==="new" || mode==="edit" ?
       <>
         <Form labelCol = {{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="category name" required>
          <Input
            value = {form.name}
            onChange = {(e) => setForm({ ...form, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item label = "category type">
          <Select
            value = {form.type}
            defaultValue="expense"
            onChange={(type) => setForm({ ...form, type })}
          >
            <Select.Option value="income">income</Select.Option>
            <Select.Option value="expense">expense</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Color">
          <Input
            value={form.color}
            onChange={(e) => setForm({ ...form, color: e.target.value })}
          />
        </Form.Item>
         </Form>
      </>:
      <>
        <h1>Are You Sure?</h1>
      </>}
     
    </Modal>
  );
};

export default ManageModal;
