import React from 'react';
import {
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import Image from "material-ui-image";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  menu: {
    '& .MuiMenu-paper': {
      minWidth: 160,
    }
  }
}));

export default function TurPopover(props) {
  const { classes: itemClasses, item } = props
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const iconStyle = {
    width: 24,
    height: 24,
    padding: 0,
    background: 'transparent',
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        className={itemClasses.button}
        startIcon={item.flag
          ? <Image style={iconStyle}  src={`/flags/${item.flag}.svg`} />
          : item.icon}
        aria-owns={anchorEl ? item.title : undefined}
        aria-haspopup="true"
        onClick={handlePopoverOpen}
      >
        {item.title}
      </Button>
      <Menu
        id={item.title}
        className={classes.menu}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        transitionDuration={100}
      >
        {item.menu.map((menuItem, index) => (
          <MenuItem key={index} onClick={handleClose}>{menuItem}</MenuItem>
        ))}
      </Menu>
    </>
  );
}
