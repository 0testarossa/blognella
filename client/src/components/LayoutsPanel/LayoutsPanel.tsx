import { List, ListItem, ListItemText, Popover, Slider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import { StyledCenterText, StyledLayoutColorsContainer, StyledLayoutsPanel } from "./LayoutsPanel.styled";
import { getValidatorMsg } from "../validators/validatorMsg";
import { getLayouts, LayoutProps, updateLayout } from "../../APIRequests/Layout";
import { allLayoutNames } from "./LayoutPanel.data";
import { theme } from "../../App.styles";

const LayoutsPanel = () => {
    const [allLayouts, setAllLayouts] = useState(allLayoutNames);
    const lang = localStorage.getItem("blognellaLang");
    const layout = localStorage.getItem("blognellaTheme") || "default";
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])
    const [chosenLayout, setChosenLayout] = useState({_id: "", name: "", mainWidth: 500})

    const marks = [
        {
          value: 560,
          label: lang === "en" ? `Main Post Width ${chosenLayout.mainWidth}px` : "Szerokość Głównego Wpisu",
        },
        {
          value: 670,
          label: lang === "en" ? `About Post Width ${930 - chosenLayout.mainWidth}px` : "Szerokość Sekcji 'O mnie'",
        },
      ];

    const handleMainWidthChange = (event, newValue) => {
        false && event.persist();
        setChosenLayout({...chosenLayout, mainWidth: newValue});
    };

    const fetchAllLayouts = () => {
        getLayouts()
        .then(({ data: { layouts } }: LayoutProps[] | any) => layouts.length > 0 && setChosenLayout({...layouts[0], mainWidth: Math.round(layouts[0].mainWidth*9.3)}))
        .catch((err: Error) => console.log(err))
    }

    const onLayoutSave = (event) => {
        event.persist();
        updateLayout({...chosenLayout, mainWidth: chosenLayout.mainWidth/9.3})
        .then(({status}: any) => {
            if(status !== 403 && status !== 500) {
                setErrorMsg([lang === "en" ? " Saved layout " : " Zapisano układ strony "])
                setAnchorEl(event.target);
                window.location.reload();
            } else {
                setErrorMsg([lang === "en" ? "There are server problems" : "Wystąpiły problemy z serwerem"])
                setAnchorEl(event.target);
            }
        });
    }

    useEffect(() => {
        fetchAllLayouts()
        false && setAllLayouts(allLayoutNames);
    }, [])

    const onLayoutClick = (layoutName: string) => {
        setChosenLayout({...chosenLayout, name: layoutName});
    }

      const getListItems = () => {
          return allLayouts.map((layout:any) => 
          <ListItem key={layout.name} style={{cursor: "pointer", color: chosenLayout.name === layout.name ? layout.colors[2] : "inherit",
           border: chosenLayout.name === layout.name && layout.name !== "white" ? "1px solid rgba(223, 223, 223, 0.2)" 
           : chosenLayout.name === layout.name ? "1px solid rgba(0, 0, 0, 0.2)" : "unset", borderRadius: "1rem"}} 
          onClick={() => onLayoutClick(layout.name)}>
          <ListItemText
            primary={lang === "en" ? layout.name : layout.plName}
          />
            <StyledLayoutColorsContainer>
                <div style={{backgroundColor: layout.colors[0], height: "0.66rem"}}></div>
                <div style={{backgroundColor: layout.colors[1], height: "0.66rem"}}></div>
                <div style={{backgroundColor: layout.colors[2], height: "0.66rem"}}></div>
            </StyledLayoutColorsContainer>
        </ListItem>
        );
      }

    return (
        <StyledLayoutsPanel textColor={theme.text[layout]}>
                <StyledCenterText>{lang === "en" ? "Theme Name" : "Nazwa Motywu"}</StyledCenterText>
             <List>
              {getListItems()}
            </List>

            <div>
            <StyledCenterText>{lang === "en" ? "Sections Width" : "Szerokość Sekcji"}</StyledCenterText>
            <Slider
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                    min={500}
                    max={730}
                    value={chosenLayout.mainWidth}
                    onChange={handleMainWidthChange}
            />
            <Button variant="contained" color="primary" onClick={onLayoutSave}>
                    {lang === "en" ? "Save Layout" : "Zapisz Układ Strony"}
            </Button>
            <Popover
                id={Boolean(anchorEl) ? 'simple-popover' : undefined}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <Typography>{getValidatorMsg(errorMsg)}</Typography>
            </Popover>
            </div>
        </StyledLayoutsPanel>
    )
}

export default withRouter(LayoutsPanel);