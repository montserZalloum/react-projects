import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import {useSelector} from 'react-redux'
function Loader(props) {
    // const {global} = useSelector(state => state)
    const isLoading = props.isLoading;
  return (
    <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  )
}

export default Loader