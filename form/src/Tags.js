import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Button, Badge, Paper, Container, useTheme } from '@mui/material';
import './Tags.css';
import CustomLayout from './CustomLayout';

const Tags = () => {
  const [checkboxes, setCheckboxes] = useState([]);
  const theme = useTheme(); 

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setCheckboxes([...checkboxes, id]);
    } else {
      setCheckboxes(checkboxes.filter((checkbox) => checkbox !== id));
    }
  };

  const tableData = [
    { id: 'label2', name: 'DEVK', matching_algorithm: 'Automatisch', document_count: 2, color: '#cdb037' },
    { id: 'label3', name: 'INBOX', matching_algorithm: 'Automatisch', document_count: 2, color: '#97da6d' },
    { id: 'label5', name: 'PRUFUNG', matching_algorithm: 'Automatisch', document_count: 0, color: '#eadcac' },
    { id: 'label1', name: 'Versicherung', matching_algorithm: 'Automatisch', document_count: 2, color: '#64c4d8' },
  ];

  return (
    <CustomLayout>
    <Container>
      <TableContainer component={Paper} elevation={3} square>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  id="all-objects"
                  onChange={handleCheckboxChange}
                />
              </TableCell>
              <TableCell>name</TableCell>
              <TableCell className="d-none d-sm-table-cell">Correspondent</TableCell>
              <TableCell>Number of Document</TableCell>
              <TableCell>Colour</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>
                  <Checkbox
                    id={data.id}
                    onChange={handleCheckboxChange}
                  />
                </TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell className="d-none d-sm-table-cell">{data.matching_algorithm}</TableCell>
                <TableCell>{data.document_count}</TableCell>
                <TableCell>
                  <Badge badgeContent={data.color} color="primary" style={{ backgroundColor: theme.palette.primary.main }} />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">แก้ไข</Button>
                  <Button variant="contained" color="error">ลบ</Button>
                  {/* สามารถเพิ่มปุ่มเพิ่มเติมได้ตามต้องการ */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </CustomLayout>
  );
};

export default Tags;
