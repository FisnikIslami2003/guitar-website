import React, { useState } from 'react';
import './Selection.scss';
import { Select, Input, Pagination, Spin } from "antd";
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { GET_BRAND_MODELS } from '../../../graphql/queries';
import { useBrand } from '../../../context/BrandContext';

const { Option } = Select;

export const Selection = () => {
  const { selectedBrand: brand } = useBrand();
  const [filterType, setFilterType] = useState('');
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_BRAND_MODELS, {
    variables: { id: brand?.id },
    skip: !brand?.id,
  });

  const models = data?.findBrandModels || [];

  const filteredModels = models.filter(model => {
    const matchesType = filterType ? model.type === filterType : true;
    const matchesName = model.name.toLowerCase().includes(searchName.toLowerCase());
    return matchesType && matchesName;
  });

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedModels = filteredModels.slice(startIndex, startIndex + pageSize);
  const guitarTypes = Array.from(new Set(models.map(m => m.type)));

  if (!brand) return <p>Please select a brand first.</p>;
  if (loading) return <Spin tip="Loading guitars..." />;
  if (error) return <p>Error loading guitars.</p>;

  return (
    <div className='selection-main'>
      <h1>
        Check out the <span style={{ color: 'orange' }}>Selection</span>
      </h1>
      <div className='inputs'>
        <Select
          placeholder="Filter by type"
          style={{ width: 334, height: 74, fontSize: 20 }}
          onChange={(value) => {
            setFilterType(value);
            setCurrentPage(1);
          }}
          value={filterType || ""}
          allowClear
        >
          <Option value="">All</Option>
          {guitarTypes.map(type => (
            <Option key={type} value={type}>{type}</Option>
          ))}
        </Select>

        <Input
          placeholder="Search by name"
          prefix={<SearchOutlined />}
          style={{ width: 485, height: 74, fontSize: 30 }}
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className='guitars'>
        {paginatedModels.length === 0 ? (
          <p>No guitars found.</p>
        ) : (
          <div className='guitars-grid'>
            {paginatedModels.map(model => (
              <div
                key={model.id}
                className='guitar-card'
                onClick={() => navigate(`/guitars/${brand.id}/${model.id}`, { state: { model } })}
                style={{ cursor: 'pointer' }}
              >
                <img src={model.image} alt={model.name} className='guitar-image' />
                <h3>{model.name}</h3>
                <p>${model.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {filteredModels.length > pageSize && (
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredModels.length}
          onChange={page => setCurrentPage(page)}
          style={{ textAlign: 'center', marginTop: 30 }}
        />
      )}
    </div>
  );
};
