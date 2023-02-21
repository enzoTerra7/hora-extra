import React, { useState, useEffect } from 'react'
import * as Styles from './styles'
import AccordionComponent from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Skeleton } from '@mui/material';

export type AccordionComponentProp = {
  expanded: string,
  title: string,
  details: string,
  step: string
}

export interface AccordionProps {
  steps: AccordionComponentProp[]
  isLoading?: boolean
  className?: string
}

export const Accordion = (props: AccordionProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Styles.Container className={props.className} >
      {props.isLoading ? (
        <>
          <AccordionComponent>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                <Skeleton animation="wave" width="40px" height="20px" />
              </Typography>
              <Skeleton animation="wave" width="100%" height="20px" />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Skeleton animation="wave" width="100%" height="20px" />
              </Typography>
            </AccordionDetails>
          </AccordionComponent>
          <AccordionComponent>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                <Skeleton animation="wave" width="40px" height="20px" />
              </Typography>
              <Skeleton animation="wave" width="100%" height="20px" />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Skeleton animation="wave" width="100%" height="20px" />
              </Typography>
            </AccordionDetails>
          </AccordionComponent>
          <AccordionComponent>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                <Skeleton animation="wave" width="40px" height="20px" />
              </Typography>
              <Skeleton animation="wave" width="100%" height="20px" />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Skeleton animation="wave" width="100%" height="20px" />
              </Typography>
            </AccordionDetails>
          </AccordionComponent>
        </>
      ) : (
        props.steps.map((accordion, index) => (
          <AccordionComponent key={index} expanded={expanded === accordion.expanded} onChange={handleChange(accordion.expanded)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${accordion.expanded}bh-content`}
              id={`${accordion.expanded}bh-header`}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {accordion.step}
              </Typography>
              {accordion.title && <Typography sx={{ color: 'text.secondary' }}>{accordion.title}</Typography>}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {accordion.details}
              </Typography>
            </AccordionDetails>
          </AccordionComponent>
        ))
      )}
    </Styles.Container>
  )
}