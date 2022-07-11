import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputRef,
  Modal,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import { Category, CategoryForm } from "../types/category";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store/store";
import { addCategory, getAllCategory, updateCategory } from "../redux/actions/categoryActions";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
type Mode = "new" | "edit" | "delete";

const emptyForm: CategoryForm = {
  name: "",
  type: "expense",
  color: "",
};

const CategoryPage = () => {
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.category
  );

  const dispatch = useAppDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form, setForm] = useState<CategoryForm>(emptyForm);
  const [mode, setMode] = useState<Mode>("new");
    const [categoryId, setCategoryId] = useState<number|null>(null)
  const showModal = (mode: Mode) => {
    setIsModalVisible(true);
    setMode(mode);
  };

  const handleOk = () => {
    if (mode === "new") {
      dispatch(addCategory(form));
    }
    if(mode==="edit" && typeof categoryId === "number"){
      dispatch(updateCategory(categoryId,form))
    }
    setIsModalVisible(false);
    setForm(emptyForm);
    setMode("new");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setMode("new");
  };

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text: string, category: Category) => {
        return <Tag color={category.color}>{text.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (text: string, category: Category) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => {
              showModal("edit");
              setForm(category);
              setCategoryId(category.id)
            }}
          />
          <DeleteOutlined
            onClick={() => {
              showModal("delete");
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginTop: "25px" }}>
        <Button type="primary" onClick={() => showModal("new")}>
          Create Category
        </Button>
        <Table columns={columns} dataSource={data} />
      </div>
      <Modal
        title={mode === "new" ? "CREATE NEW CATEGORY" : "UPDATE CATEGORY"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: !form.name }}
      >
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="category name" required>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="category type">
            <Select
              value={form.type}
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
      </Modal>
    </>
  );
};

export default CategoryPage;
