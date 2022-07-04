import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Select, Space, Table, Tag } from "antd";
import { Category } from "../types/category";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store/store";
import { getAllCategory } from "../redux/actions/categoryActions";

type Mode = "new" | "edit";

const CategoryPage = () => {
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.category
  );
  console.log(data);

  const dispatch = useAppDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("new");

  const showModal = (mode: Mode) => {
    setIsModalVisible(true);
    setMode(mode);
  };

  const handleOk = () => {
    setIsModalVisible(false);
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
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
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
      >
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
          <Form.Item label="category name">
            <Input />
          </Form.Item>
          <Form.Item label="type">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryPage;
