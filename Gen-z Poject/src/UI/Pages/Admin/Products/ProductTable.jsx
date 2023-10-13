// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { deleteProduct } from "../../../../Redux/Features/ProductSlice/ProductSlice";

function ProductTable() {
  const { product, err } = useSelector((state) => {
    return state?.productReducer;
  });
  const dispath = useDispatch();

  const deleteHandler = (data, index) => {
    dispath(deleteProduct({ id: data?._id, index }));
  };

  if (err.lenght > 0) {
    toast.error(err);
  }

  return (
    <>
      <div className="bg-gray-200 grid place-content-center h-auto py-20 w-full">
        <Table bordered>
          <thead>
            <tr>
              <th>Sr .</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product?.map?.((e, i) => {
              return (
                <tr key={e?.id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <div className="grid place-content-center">
                      <img src={e?.thumbnail} alt="" className=" max-h-28" />
                    </div>
                  </td>
                  <td>{e?.title}</td>
                  <td className="truncate max-w-md">{e?.description}</td>
                  <td>{e?.price}</td>
                  <td>
                    <div className="flex gap-2 align-items-center">
                      <Button
                        color="danger"
                        onClick={() => deleteHandler(e, i)}
                      >
                        <RiDeleteBin6Line className="text-xl" />
                      </Button>
                      <Button color="info">
                        <RiEdit2Line className="text-xl" />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ProductTable;
