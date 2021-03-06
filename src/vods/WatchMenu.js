import { useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Button, Typography, MenuItem, Menu } from "@mui/material";
import CustomLink from "../utils/CustomLink";

export default function WatchMenu(props) {
  const { vod } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <Button onClick={handleClick}>
        <Typography variant="h7">Watch</Typography>
        <PlayArrowIcon />
      </Button>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {vod.youtube.length > 0 && (
          <CustomLink href={`/youtube/${props.vod.id}`}>
            <MenuItem>
              <YouTubeIcon sx={{ mr: 1 }} />
              Youtube
            </MenuItem>
          </CustomLink>
        )}
        <CustomLink href={`/manual/${props.vod.id}`}>
          <MenuItem>
            <OpenInBrowserIcon sx={{ mr: 1 }} />
            Manual
          </MenuItem>
        </CustomLink>
      </Menu>
    </Box>
  );
}
