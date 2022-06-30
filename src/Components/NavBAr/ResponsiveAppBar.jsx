import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Avatar, Badge } from '@mui/material';
import { useFetch } from '../../Hooks/useFetch';
import { Link, useNavigate } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import { IoIosLogIn } from 'react-icons/io';
import { AuthContext } from "../../contexts/auth";
import "../../assets/style/navbar.scss";
import logo from "../../assets/image/1.jpg"

function ResponsiveAppBar() {
   const { auth, setAuth } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logout = () => {
       
        setAuth(null)
        navigate('/signin')
    }
  
  const { data, loading } = useFetch('denuncias');
  
  return (
     <Navbar bg="light" expand="lg" fixed='top'>
          <Navbar.Brand><img src={logo} alt='logo' />
                <span className='ml-3 title'>Woter Control</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {
                        origin === 'public' ? (
                            <>
                                <Nav.Link><Link to='/HOME'>Portal</Link></Nav.Link>
                                <Nav.Link><Link to='/signin'>Signin <IoIosLogIn /></Link></Nav.Link>
                            </>
                        ) : (
                            <div className='d-flex align-items-center'>
                                <Badge onClick={()=>handleShow()} badgeContent={data?.length || 0} color="primary">
                                    <MailIcon color="action" />
                                </Badge>
                              
                                <Avatar className='mx-2' sx={{ width: 24, height: 24 }} alt={auth?.user} src="/static/images/avatar/1.jpg" />
                                <NavDropdown className='mr-5' title={auth?.user} id="navbarScrollingDropdown">
                                    <NavDropdown.Item>Perfil</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => logout()}>Sair</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  );
}

export default ResponsiveAppBar;
