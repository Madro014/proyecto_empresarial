import React, { createContext, useState, useContext, useEffect } from 'react';

const UserRoleContext = createContext();

export const UserRoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('visitor');

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  const updateUserRole = (role) => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
  };

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole: updateUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export const useUserRole = () => useContext(UserRoleContext);