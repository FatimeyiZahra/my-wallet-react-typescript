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
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../redux/actions/categoryActions";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ManageModal from "./ManageModal";
export type Mode = "new" | "edit" | "delete";

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
  const [categoryId, setCategoryId] = useState<number | null>(null);
console.log(categoryId)
  const showModal = (mode: Mode) => {
    setIsModalVisible(true);
    setMode(mode);
  };

  const handleOk = () => {
    if (mode === "new") {
      dispatch(addCategory(form));
    }
    if (mode === "edit" && typeof categoryId === "number") {
      dispatch(updateCategory(categoryId, form));
    }
    if(mode==="delete" && typeof categoryId === "number"){
      dispatch(deleteCategory(categoryId))
    }
    setIsModalVisible(false);
    setForm(emptyForm);
    setMode("new");
    setCategoryId(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setForm(emptyForm);
    setMode("new");
    setCategoryId(null);
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
              setCategoryId(category.id);
            }}
          />
          <DeleteOutlined
            onClick={() => {
              showModal("delete");
              setCategoryId(category.id)
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
      <ManageModal
        mode={mode}
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        form={form}
        setForm={setForm}
      />
    </>
  );
};

export default CategoryPage;
