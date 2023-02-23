import { Pagination, Skeleton, Stack, TablePagination } from '@mui/material'
import React from 'react'
import { ButtonComponent, ButtonProps } from '../Button'
import { InputComponent, InputProps } from '../Input'
import { Select } from '../Select'
import * as Styles from './styles'

import { MdSearch } from 'react-icons/md'
import FilterComponent, { FilterProps } from '../FilterContainer'

export type ColumnProps = {
  title: React.ReactNode
  key: string
  isHidden?: boolean
  render: (value: any) => React.ReactNode
  width?: string
}

export type PaginationProps = {
  count: string | number
  rowsPerPage: string
  page: string | number
  changeRowsPerPage: (e: any) => void
  changePage: (e: any) => void
}

interface SearchProps extends InputProps {
  search: () => void
}

export interface TableProps {
  data: any[];
  columns: ColumnProps[]
  title: string;
  subtitle?: string;
  rightIcon?: React.ReactNode;
  mainButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  className?: string
  withoutPagination?: boolean
  pagination?: PaginationProps;
  inputSearch?: SearchProps
  loading?: boolean
  filterOptions?: FilterProps
}

export const Table = (props: TableProps) => {

  return (
    <Styles.Container className={props.className} >
      <Styles.Header>
        <div className="main">
          {props.rightIcon && (
            <div className="icon">
              {props.rightIcon}
            </div>
          )}
          <div className="titles">
            <h4>
              {props.title}
            </h4>
            {props.subtitle && (
              <small>
                {props.subtitle}
              </small>
            )}
          </div>
        </div>
        <div className="buttons">
          {!props.withoutPagination && (
            <div className="paginationRows">
              Mostrar
              <Select
                data={[
                  {
                    name: '5',
                    value: '5'
                  },
                  {
                    name: '10',
                    value: '10'
                  },
                  {
                    name: '15',
                    value: '15'
                  },
                  {
                    name: '20',
                    value: '20'
                  },
                ]}
                withoutDefaultOption
                id='PaginationSelect'
                value={props.pagination?.rowsPerPage}
                isPagination
                onChange={(e) => props.pagination?.changeRowsPerPage(e)}
              />
              Itens
            </div>
          )}
          {props.inputSearch && (
            <div className="searchContainer">
              <InputComponent
                {...props.inputSearch}
                name="search"
                rightIcon={<MdSearch size={20} onClick={props.inputSearch.search} />}
              />
            </div>
          )}
          {props.filterOptions && <FilterComponent {...props.filterOptions} />}
        </div>
      </Styles.Header>
      <Styles.Table id="table">
        {props.loading ?
          <>
            <Styles.Tr>
              {props.columns.map((column, index: any) => (
                <Styles.Th
                  key={index}
                  isHidden={column.isHidden}
                  style={{
                    width: column.width || 'unset'
                  }}
                >
                  {column.title}
                </Styles.Th>
              ))}
            </Styles.Tr>
            <Styles.Tr id="item">
              {props.columns.map((column, idx: any) => (
                <Styles.Td
                  key={column.key}
                  isHidden={column.isHidden}
                  style={{
                    width: column.width || 'unset'
                  }}
                >
                  <Skeleton animation="wave" />
                </Styles.Td>
              ))}
            </Styles.Tr>
            <Styles.Tr>
              {props.columns.map((column: ColumnProps, idx: any) => (
                <Styles.Border
                  key={idx}
                  style={{
                    width: column.width || 'unset'
                  }}
                >
                  <hr />
                </Styles.Border>
              ))}
            </Styles.Tr>
            <Styles.Tr id="item">
              {props.columns.map((column, idx: any) => (
                <Styles.Td
                  key={column.key}
                  isHidden={column.isHidden}
                  style={{
                    width: column.width || 'unset'
                  }}
                >
                  <Skeleton animation="wave" />
                </Styles.Td>
              ))}
            </Styles.Tr>
            <Styles.Tr>
              {props.columns.map((column: ColumnProps, idx: any) => (
                <Styles.Border
                  key={idx}
                  style={{
                    width: column.width || 'unset'
                  }}
                >
                  <hr />
                </Styles.Border>
              ))}
            </Styles.Tr>
            <Styles.Tr id="item">
              {props.columns.map((column, idx: any) => (
                <Styles.Td
                  key={column.key}
                  isHidden={column.isHidden}
                  style={{
                    width: column.width || 'unset'
                  }}
                >
                  <Skeleton animation="wave" />
                </Styles.Td>
              ))}
            </Styles.Tr>
            <Styles.Tr>
              {props.columns.map((column: ColumnProps, idx: any) => (
                <Styles.Border
                  key={idx}
                  style={{
                    width: column.width || 'unset'
                  }}
                >
                  <hr />
                </Styles.Border>
              ))}
            </Styles.Tr>
          </>
          :
          <>
            <Styles.Tr>
              {props.columns.map((column, index: any) => (
                <Styles.Th
                  key={index}
                  isHidden={column.isHidden}
                  style={{
                    width: column.width || 'unset',
                    minWidth: column.width ? 'unset' : '130px'
                  }}
                >
                  {column.title}
                </Styles.Th>
              ))}
            </Styles.Tr>
            {props.data.map((data: any, index) => (
              <>
                <Styles.Tr id="item" key={index}>
                  {props.columns.map((column, idx: any) => (
                    <Styles.Td
                      key={column.key}
                      isHidden={column.isHidden}
                      style={{
                        width: column.width || 'unset',
                        minWidth: column.width ? 'unset' : '130px'
                      }}
                    >
                      {column.render(data)}
                    </Styles.Td>
                  ))}
                </Styles.Tr>
                <Styles.Tr>
                  {props.columns.map((column: ColumnProps, idx: any) => (
                    <Styles.Border
                      key={idx}
                      style={{
                        width: column.width || 'unset',
                        minWidth: column.width ? 'unset' : '130px'
                      }}
                    >
                      <hr />
                    </Styles.Border>
                  ))}
                </Styles.Tr>
              </>
            ))}
          </>
        }
      </Styles.Table>
      {props.pagination && (
        <Stack spacing={2} id="pagination">
          <Pagination page={Number(props.pagination.page)} count={Number(props.pagination.count)} onChange={(e: any, value) => {
            console.log(value)
            props.pagination?.changePage(value)
          }} />
        </Stack>
      )}
    </Styles.Container>
  )
}