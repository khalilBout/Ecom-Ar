"use client";
import React, { useEffect } from "react";

const FormAddVideo = ({
  form,
  setForm,
  levels,
  setLevels,
  levelList,
  setLevelList,
}) => {
  useEffect(() => {
    const fetchLevels = async () => {
      const res = await fetch("/api/levels", {
        method: "GET",
      });
      const data = await res.json();
      setLevelList(data);
    };

    fetchLevels();
  }, []);

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handelChangeLevel = (e) => {
    e.preventDefault();
    setLevels(e.target.value);
  };
  // const ListClass = levelList?.find((elm) => elm.title === levels);

  const listSeason = ["season-1", "season-2"];
  return (
    <form>
      <div className="grid lg:grid-cols-2 gap-2 mx-2 ">
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="عنوان الكتاب"
          type="text"
          name="title"
          onChange={handelChange}
        />
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="سعر  الكتاب"
          type="number"
          name="price"
          onChange={handelChange}
        />
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="عدد صفحات الكتاب"
          type="number"
          name="numberOfPages"
          onChange={handelChange}
        />
        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
          name="season"
          onChange={handelChange}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            الفصل
          </option>
          {listSeason?.map((elm) => (
            <option key={elm} value={elm}>
              {elm}
            </option>
          ))}
        </select>

        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
          name="levels"
          onChange={handelChangeLevel}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            المستوى
          </option>
          {levelList?.map((lev, ind) => {
            return (
              <option key={ind} value={lev.title}>
                {lev.title}
              </option>
            );
          })}
        </select>

        {/* <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
          name="TheClass"
          onChange={handelChange}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            القسم
          </option>
          {ListClass?.listClass?.map((elm, ind) => (
            <option key={ind} value={elm.name}>
              {elm.name}
            </option>
          ))}
        </select> */}
      </div>
      <div className="m-2">
        <textarea
          rows={3}
          className="w-full border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none "
          placeholder="وصف الكتاب"
          type="text"
          name="description"
          onChange={handelChange}
        />
      </div>
    </form>
  );
};

export default FormAddVideo;
