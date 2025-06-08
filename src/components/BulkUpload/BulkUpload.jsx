import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import * as XLSX from "xlsx";

const { Dragger } = Upload;

const BulkUpload = ({ onUploadComplete }) => {
  const [fileName, setFileName] = useState(null);

  const props = {
    name: "file",
    multiple: false,
    accept: ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
    showUploadList: false,

    beforeUpload(file) {
      const isExcel =
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel" ||
        file.type === "text/csv";

      if (!isExcel) {
        message.error("Only CSV or Excel files are allowed!");
        return Upload.LIST_IGNORE;
      }

      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

        if (typeof onUploadComplete === "function") {
          onUploadComplete(jsonData);
        }
      };
      reader.readAsArrayBuffer(file);

      return false; // Prevent auto upload
    },
  };

  return (
    <div className="bulk-upload-wrapper">
      <h5 className="mb-3">Bulk Product Upload</h5>

      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Supports .csv, .xls, .xlsx format. Max size: 5MB</p>
      </Dragger>

      {fileName && <p className="mt-3 text-success">File ready: {fileName}</p>}

      {/* <div className="mt-3">
        <Button
          variant="outline-primary"
          size="sm"
          href="/sample/product-bulk-upload-template.xlsx"
          download
        >
          Download Sample Template
        </Button>
      </div> */}
    </div>
  );
};

export default BulkUpload;
