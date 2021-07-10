import PropTypes from 'prop-types'
import { useMemo } from 'react';
import { Checkbox, Col, Input, Row, Typography } from "antd";
import _ from "lodash"

const { Title } = Typography;
const { Search } = Input;

const SearchForm = (props) => {
  const { onChangeName, onChangeBoardCode, onChangeCategoryName } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChangeNameDebounce =  useMemo(() => _.debounce(onChangeName, 300), []);

  return (
    <>
      <Title level={3}>Hotel List</Title>
      <Row gutter={[1, 12]}>
        <Col xs={{ span: 15 }} lg={{ span: 8 }}>
          <label>Hotel Name:</label>
          <Search
            placeholder="Search (Please use enter key to search)"
            onChange={onChangeNameDebounce}
            enterButton
          />
        </Col>
        <Col span={9}></Col>
        <Col span={8}>
          <label>Board:</label>
          <Col>
            <Checkbox
              name="BED AND BREAKFAST"
              onChange={(e) => onChangeBoardCode(e)}
            >
              BED AND BREAKFAST
            </Checkbox>
          </Col>
          <Col>
            <Checkbox name="FULL BOARD" onChange={(e) => onChangeBoardCode(e)}>
              FULL BOARD
            </Checkbox>
          </Col>
          <Col>
            <Checkbox name="HALF BOARD" onChange={(e) => onChangeBoardCode(e)}>
              HALF BOARD
            </Checkbox>
          </Col>
          <Col>
            <Checkbox name="ROOM ONLY" onChange={(e) => onChangeBoardCode(e)}>
              ROOM ONLY
            </Checkbox>
          </Col>
        </Col>
        <Col span={9}></Col>
        <Col span={8}>
          <label>Category:</label>
          <Col>
            <Checkbox name="1 STAR" onChange={(e) => onChangeCategoryName(e)}>
              1 STAR
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="1 STAR AND A HALF"
              onChange={(e) => onChangeCategoryName(e)}
            >
              1 STAR AND A HALF
            </Checkbox>
          </Col>
          <Col>
            <Checkbox name="2 STARS" onChange={(e) => onChangeCategoryName(e)}>
              2 STARS
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="2 STARS AND A HALF"
              onChange={(e) => onChangeCategoryName(e)}
            >
              2 STARS AND A HALF
            </Checkbox>
          </Col>
          <Col>
            <Checkbox name="3 STARS" onChange={(e) => onChangeCategoryName(e)}>
              3 STARS
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="3 STARS AND A HALF"
              onChange={(e) => onChangeCategoryName(e)}
            >
              3 STARS AND A HALF
            </Checkbox>
          </Col>
          <Col>
            <Checkbox name="4 KEYS" onChange={(e) => onChangeCategoryName(e)}>
              4 KEYS
            </Checkbox>
          </Col>
          <Col>
            <Checkbox name="4 STARS" onChange={(e) => onChangeCategoryName(e)}>
              4 STARS
            </Checkbox>
          </Col>
        </Col>
      </Row>
    </>
  );
};

SearchForm.propTypes = {
  onChangeName: PropTypes.func,
  onChangeBoardCode: PropTypes.func,
  onChangeCategoryName: PropTypes.func
};

export default SearchForm;
