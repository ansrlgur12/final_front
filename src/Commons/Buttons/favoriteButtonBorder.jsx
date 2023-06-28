import { FavoriteBorder} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { forwardRef } from 'react';


const FavoriteButton = forwardRef((props, ref) => {
    const { onClick } = props;
return(
<>
<IconButton  ref={ref}
      color="error" 
      aria-label="favorite" 
      {...props}>
    <FavoriteBorder />
  </IconButton>
</>
);
}); export default FavoriteButton