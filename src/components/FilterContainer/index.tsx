import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import * as Styles from './styles';
import { BiFilter } from 'react-icons/bi';
import { ButtonComponent } from '../Button';
import { AiFillControl } from 'react-icons/ai';
import { IconButton } from '../IconButton';

export interface FilterProps {
    filterFunction: () => void;
    cleanUpFilter: () => void;
    children: React.ReactNode
}

export default function FilterComponent(props: FilterProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const filterFunc = () => {
        props.filterFunction()
        handleClose()
    }

    const cleanUpFilterFunc = () => {
        props.cleanUpFilter()
        handleClose()
    }

    return (
        <Styles.Container>
            <IconButton
                aria-describedby={id}
                onClick={handleClick}
                icon={<BiFilter size={20} title="Filtrar" />}
                model="primary"
                disabled={open}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                style={{
                    borderRadius: '12px',
                }}
            >
                <Typography
                    className="filterContainer"
                >
                    <Styles.FilterContainer>
                        {props.children}
                        <div className="buttonsRow">
                            <ButtonComponent
                                onClick={() => cleanUpFilterFunc()}
                                text='Limpar'
                                model='other'
                            />

                            <ButtonComponent
                                onClick={() => filterFunc()}
                                leftIcon={<AiFillControl size={20} title="Filtrar" />}
                                text='Filtrar'
                                model='primary'
                            />

                        </div>
                    </Styles.FilterContainer>
                </Typography>
            </Popover>
        </Styles.Container>
    );
}