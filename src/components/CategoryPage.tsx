import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { Category } from "../types/category";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store/store";
import { getAllCategory } from "../redux/actions/categoryActions";

const CategoryPage = () => {
const data = useAppSelector((state:RootState)=>state.category)
console.log(data)
const dispatch= useAppDispatch()
useEffect(() => {
 dispatch(getAllCategory())
}, [])

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
      {/* <Table columns={columns} dataSource={data} /> */}
    </>
  );
};

export default CategoryPage;
