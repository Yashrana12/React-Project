import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import makeAnimated from "react-select/animated";
import { addProduct } from "../../../../Redux/Features/ProductSlice/ProductSlice";
import Select from "react-select";

// eslint-disable-next-line react/prop-types
function ProductForm({ toggle, modal }) {
  let [productdata, setProductData] = useState({
    title: String,
    description: String,
    gender: String,
    price: Number,
    thumbnail: String,
    discountPercentage: Number,
    category: [],
    matel: [],
    availableStock: Number,
  });

  const options = [
    { value: "ring", label: "Ring" },
    { value: "chain", label: "Chian" },
    { value: "cufflinks", label: "Cufflinks" },
    { value: "bracelets", label: "Bracelets" },
  ];

  const matelOptions = [
    { value: "silver", label: "Silver" },
    { value: "gold", label: "Gold" },
    { value: "diamond", label: "Diamond" },
  ];

  const animatedComs = makeAnimated();

  const dispatch = useDispatch();

  const addData = () => {
    dispatch(addProduct(productdata));
    setProductData({
      title: "",
      description: "",
      gender: "",
      price: "",
      thumbnail: "",
      discountPercentage: "",
      category: [],
      matel: [],
      availableStock: "",
    });
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Product Info..</ModalHeader>
        <ModalBody>
          <div className="bg-slate-300 p-6">
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleTitle">Title</Label>
                    <Input
                      id="exampleTitle"
                      name="title"
                      placeholder="Enter Title"
                      type="text"
                      value={productdata?.title}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          title: e?.target?.value,
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleAddress">Description</Label>
                    <Input
                      id="exampleDescription"
                      name="description"
                      placeholder="Enter Description"
                      value={productdata?.description}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          description: e?.target?.value,
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={7}>
                  <FormGroup>
                    <Label for="exampleAddress2">Gender</Label>
                    <Row>
                      <Col>
                        <FormGroup className="flex gap-1">
                          <Label for="male">Male</Label>
                          <Input
                            id="male"
                            checked={productdata?.gender === "male"}
                            type="radio"
                            onChange={() =>
                              setProductData({ ...productdata, gender: "male" })
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup className="flex gap-1">
                          <Label for="female">Female</Label>
                          <Input
                            id="female"
                            checked={productdata.gender === "female"}
                            type="radio"
                            onChange={() =>
                              setProductData({
                                ...productdata,
                                gender: "female",
                              })
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup className="flex gap-1">
                          <Label for="kids">Kids</Label>
                          <Input
                            id="kids"
                            checked={productdata.gender === "kids"}
                            type="radio"
                            onChange={() =>
                              setProductData({ ...productdata, gender: "kids" })
                            }
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePrice">Price</Label>
                    <Input
                      id="examplePrice"
                      name="price"
                      placeholder="Enter Price"
                      value={productdata?.price}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          price: e?.target?.value,
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleDiscountedPercentage">
                      Discount Percentage
                    </Label>
                    <Input
                      id="exampleDiscountedPercentage"
                      name="discountedPercentage"
                      value={productdata?.discountPercentage}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          discountPercentage: e?.target?.value,
                        })
                      }
                      placeholder="Discount Percentage"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleThumbnail">Image</Label>
                    <Input
                      id="exampleThumbnail"
                      name="thumbnail"
                      value={productdata?.thumbnail}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          thumbnail: e?.target?.value,
                        })
                      }
                      placeholder=" Image Url"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleAvailbleStock">Availble Stock</Label>
                    <Input
                      id="exampleAvailbleStock"
                      name="svailbleStock"
                      value={productdata?.availableStock}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          availableStock: e?.target?.value,
                        })
                      }
                      placeholder="Add Stock"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleCategory">Select Category</Label>
                    <Select
                      options={options}
                      isMulti
                      components={animatedComs}
                      placeholder={"Select Categories"}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          category: e.map((e) => e.value),
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Select Matel</Label>
                    <Select
                      options={matelOptions}
                      isMulti
                      components={animatedComs}
                      placeholder={"Select matel"}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          color: e?.map((e) => e.value),
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <div className="mt-3 flex justify-center">
                <Button color="success" onClick={() => addData()}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ProductForm;
