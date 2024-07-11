// import { Outlet, Link } from "react-router-dom";
// import Container from "../../components/Container/Container";
// import {  UserOutlined, VideoCameraOutlined, ShopOutlined } from '@ant-design/icons';
// import { Layout, Menu } from 'antd';

// const { Header, Content, Sider } = Layout;

// const Dashboard = () => {
//     return (
//         <Container >
            
//             <Layout theme="light" className="min-h-screen opacity-50">
//                 <Sider
//                     breakpoint="lg"
//                     collapsedWidth="0"
//                     onBreakpoint={(broken) => {
//                         console.log(broken);
//                     }}
//                     onCollapse={(collapsed, type) => {
//                         console.log(collapsed, type);
//                     }}
                    
//                 >
//                    <Link to='/' className='flex-grow flex justify-center '>
//                   <h2 className='text-3xl font-bold text-slate-400 text-center'>
//                  <span className='text-slate-300'>Click</span>Craft
//                    </h2>
//                </Link>
//                     <Menu theme="light" mode="inline">
//                         <Menu.Item key="1" icon={<UserOutlined />}>
//                             <Link to="/dashboard">Dashboard</Link>
//                         </Menu.Item>
//                         <Menu.Item key="2" icon={<ShopOutlined />}>
//                             <Link to="/dashboard/add-product">Add Product</Link>
//                         </Menu.Item>
//                         <Menu.Item key="3" icon={<VideoCameraOutlined />}>
//                             <Link to="/dashboard/manage-products">Manage Products</Link>
//                         </Menu.Item>
                        
//                     </Menu>
//                 </Sider>
//                 <Layout>
//                     <Header className="bg-white shadow">
//                         <div className="flex justify-between items-center h-full px-4">
//                             <h1 className="text-2xl font-bold">Dashboard</h1>
//                         </div>
//                     </Header>
//                     <Content className="p-6">
//                         <div className="bg-white p-6 rounded shadow">
//                             <Outlet /> {/* This will render the child routes */}
//                         </div>
//                     </Content>
//                 </Layout>
//             </Layout>
           
           
//         </Container>
//     );
// };

// export default Dashboard;