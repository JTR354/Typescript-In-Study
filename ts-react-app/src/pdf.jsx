import React from "react";
import html2pdf from "html2pdf.js";
import { Row, Col, Divider } from "antd";
import { Table, Tag } from 'antd';
import "./pdf.css";
// const { Space} = Grid
// https://github.com/eKoopmans/html2pdf.js
const style = { background: '#0092ff', padding: '8px 0' };
export default () => {
  // const [ref] = useRef()
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </div>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <>
      <div id="$pdf" style={{width: 960, margin: '0 auto'}}>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          Horizontal
        </Divider>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          Responsive
        </Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          Vertical
        </Divider>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Table columns={columns} dataSource={data} />
      </div>

      <button
        onClick={() => {
          var element = document.getElementById("$pdf");
          var opt = {
            // margin: 1,
            filename: "myfile.pdf",
            // image: { type: "jpeg", quality: 0.98 },
            // html2canvas: { scale: 2 },
            // pagebreak: {
            //   mode: "",
            //   before: ".before",
            //   after: ".after",
            //   avoid: ".avoid",
            // },
            // jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
            margin: 10,
            orientation: 'l',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16,
            jsPDF: {
              orientation: "portrait",
              unit: "in",
              format: "letter",
              compressPDF: false,
            },
          };
          console.log(element);
          // const worker = html2pdf().from(document.getElementById('$pdf')).save()
          html2pdf()
            .set(opt)
            .from(element)
            .save()
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        保存pdf
      </button>
    </>
  );
};
