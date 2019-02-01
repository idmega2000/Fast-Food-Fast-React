import jwtDecode from 'jwt-decode';

const decodeToken = () => {
  const token = localStorage.getItem('token');
  try {
    const tokenInfo = jwtDecode(token);
    return tokenInfo;
  } catch (err) {
    return null;
  }
};

export default decodeToken;
