const Mobile = require("../database-mongo/mobile");
const getAllMobiles = async (req, res ) => {
    var mobiles;
    try {
      mobiles = await Mobile.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!mobiles) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ mobiles });
  };
  
  const getById = async (req, res) => {
    const id = req.params.id;
    var mobile;
    try {
      mobile = await Mobile.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!mobile) {
      return res.status(404).json({ message: "No Mobile found" });
    }
    return res.status(200).json({ book });
  };
  
  const addMobile = async (req, res) => {
    const { name, price, processor, ram, screen, operatingSystem,camera, image } = req.body;
    var mobile;
    try {
      mobile = new Mobile({
        name,
        price,
        processor,
        ram,
        screen,
        operatingSystem,
        camera,
        image,
      });
      await mobile.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!mobile) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ mobile });
  };
  
  const updateMobile = async (req, res) => {
    const id = req.params.id;
    const { name, price, processor, RAM, Screen, OperatingSystem,Camera, image } = req.body;
    var mobile;
    try {
      mobile = await Mobile.findByIdAndUpdate(id, {
        name,
        price,
        processor,
        RAM,
        Screen,
        OperatingSystem,
        Camera,
        image,
      });
      mobile = await mobile.save();
    } catch (err) {
      console.log(err);
    }
    if (!mobile) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ mobile });
  };
  
  const deleteMobile = async (req, res) => {
    const id = req.params.id;
    var mobile;
    try {
      mobile = await Mobile.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!mobile) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
  
  exports.getAllMobiles = getAllMobiles;
  exports.addMobile = addMobile;
  exports.getById = getById;
  exports.updateMobile = updateMobile;
  exports.deleteMobile = deleteMobile;
  


