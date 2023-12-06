import { Button, Col, Form, Input, Row, Select, Typography,Tooltip } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import Swal from "sweetalert2";
import MeasureHarris from "../Measure/MeasureHarris";
import { MeasureImt } from "../Measure/MeasureImt";
import MeasureDegreeImt from "../Measure/MeasureDegreeImt";

const Tab5 = ({ patient, onChanges, info, setInfo }) => {
  const [form] = Form.useForm();
  const params = useParams();
  const [bmr, setBmr] = useState(0);
  const infoHarris = useMemo(() => ({
    height: 0,
    bodyMass: 0,
    age: patient?.age,
    gender: patient?.gender
  }), [form.getFieldValue("bodyMass"),form.getFieldValue("height")]);
  
  useEffect(() => {
    let gender = patient?.gender;
      let height = form.getFieldValue("height")*100;
      let bodyMass = form.getFieldValue("bodyMass");
      let age = patient?.age;
      infoHarris.height = height;
      infoHarris.bodyMass = bodyMass;
      infoHarris.age = age;
      infoHarris.gender = gender;
    const  item = MeasureHarris(infoHarris);
    setBmr(item);
    setInfo({...info,bmr:item})
     
    }, [patient,form.getFieldValue("height"),form.getFieldValue("bodyMass")]);
    useEffect(() => {
      form.setFieldValue('bmr', bmr);
    }, [bmr]);
const onFinish = (values) => {
    let body = {
      nurse_doc_id: params.id,
      tab: 5,

      height: values.height,
      bodyMass: values.bodyMass,
      waistCircumference: values.waistCircumference,
      hipCircumference: values.hipCircumference,
      waistHipRatio: values.waistHipRatio,
      imt: values.imt,
      presenceDegreeImt: values.presenceDegreeImt,
      adiposeTissue: values.adiposeTissue,
      internalFat: values.internalFat,
      muscleMass: values.muscleMass,
      bodyType: values.bodyType,
      bone: values.bone,
      exchangeRate: values.exchangeRate,
      metabolicAge: values.metabolicAge,
      waterInBody: values.waterInBody,
      active_factor: values.active_factor,
    };
    api
      .post("/doc/create", body)
      .then((res) => {
        if (res.status === 200) {
          setInfo(body);
          Swal.fire({
            title: "Успешно!",
            text: "Данные успешно сохранены",
            icon: "success",
          });
          setTimeout(() => {
            onChanges("6");
          }, 2000);
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Ошибка!",
          text: "Что-то пошло не так",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const nextClick = () => {
    onChanges("6");
  };
  const backClick = () => {
    onChanges("4");
  };

  useEffect(() => {
    form.setFieldsValue({
      height: info?.height,
      bodyMass: info?.bodyMass,
      waistCircumference: info?.waistCircumference,
      hipCircumference: info?.hipCircumference,
      
      
      adiposeTissue: info?.adiposeTissue,
      internalFat: info?.internalFat,
      muscleMass: info?.muscleMass,
      bodyType: info?.bodyType,
      bone: info?.bone,
      exchangeRate: info?.exchangeRate,
      metabolicAge: info?.metabolicAge,
      waterInBody: info?.waterInBody,
      active_factor: info?.active_factor,
    });
        let height = form.getFieldValue('height');
        let bodyMass = form.getFieldValue('bodyMass');
        const itemImt = {bodyMass:bodyMass,height:height};
        form.setFieldValue('imt', MeasureImt(itemImt));
        let imt = form.getFieldValue('imt');
        form.setFieldValue('presenceDegreeImt', MeasureDegreeImt(imt));

        let waistCircumference = form.getFieldValue('waistCircumference');
        let hipCircumference = form.getFieldValue('hipCircumference');
        let calc = (waistCircumference / hipCircumference).toFixed(2);
        form.setFieldValue('waistHipRatio', calc);

  }, [info]);
    const onValuChange = (e) => {
        let height = form.getFieldValue('height');
        let bodyMass = form.getFieldValue('bodyMass');
        const itemImt = {bodyMass:bodyMass,height:height};

        form.setFieldValue('imt', MeasureImt(itemImt));
        let imt = form.getFieldValue('imt');
        form.setFieldValue('presenceDegreeImt', MeasureDegreeImt(imt));
        let waistCircumference = form.getFieldValue('waistCircumference');
        let hipCircumference = form.getFieldValue('hipCircumference');
        let calc = (waistCircumference / hipCircumference).toFixed(2);
        e.waistHipRatio = calc;
        e.imt = imt;
        form.setFieldValue('waistHipRatio', calc);
        setInfo({ ...info, ...e });

        
      };
  return (
    <>
      <Typography.Title level={5}>
        Антропометрические данные и данные Tanita
      </Typography.Title>
      <Form
        name="tab5"
        layout="vertical"
        onFinish={onFinish}
        form={form}
        onValuesChange={onValuChange}
      >
        <Row gutter={24}>
          <Col xs={24} md={12} xl={12}>
            <Form.Item name="height" label="Рост. (M) ">
              <Input placeholder="Рост м" suffix="M" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item colon={true} name="bodyMass" label="Масса тела (кг.)">
              <Input placeholder="Масса тела" suffix="кг" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item name="waistCircumference" label="Окружность талии">
              <Input placeholder="Окружность талии" suffix="см" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item name="hipCircumference" label="Окружность бедер">
              <Input placeholder="Окружность бедер" suffix="см" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item
              name="waistHipRatio"
              label="Соотношение окружность талии/окружность бедер "
            >
              <Input disabled />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item name="imt" label="Индекс массы тела ">
              <Input  disabled />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item
              name="presenceDegreeImt"
              label="Наличие и степень ожирения по ИМТ "
            >
              <Input
                placeholder="Наличие и степень ожирения по ИМТ "
                disabled
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item name="adiposeTissue" label="Жировая ткань">
              <Input placeholder="Жировая ткань" suffix="%" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item name="internalFat" label="Внутренняя жировая ткань">
              <Input placeholder="Внутренняя жировая ткань" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item name="muscleMass" label="Масса мышц">
              <Input placeholder="Масса мышц" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item name="bodyType" label="Тип телосложения">
              <Input placeholder="Тип телосложения" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item
              name="bone"
              label="Костная ткань (Тонита)"
            >
              <Input placeholder="Костная ткань" />
            </Form.Item>
          </Col>
          <Col  xs={24} md={12} xl={12}>
            <Form.Item name="active_factor" label="коэффициент активности">
              <Select>
                <Option value="1">1,2 — низкая двигательная активность, сидячий образ жизни</Option>  
                <Option value="2">1,38 — умеренная двигательная активность, 1-2 тренировки еженедельно</Option>  
                <Option value="3">1,6 — средний уровень двигательной активности, не менее трех интенсивных тренировок каждую неделю</Option>  
                <Option value="4"> 1,73 — высокий уровень двигательной активности, порядка пяти интенсивных тренировок еженедельно</Option>  
                <Option value="5"> 1,9 — интенсивные тренировки ежедневно, сочетающиеся с тяжелой физической работой.</Option>  
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item name="exchangeRate" label="Скорость обмена">
              <Input placeholder="Скорость обмена" />
              
            </Form.Item>
            
          </Col>
          <Col xs={24} md={12} xl={12} >
            <Form.Item
              name="bmr"
              label="Формула Харриса-Бенедикта"
              
            >
              <Input   disabled />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <Form.Item name="metabolicAge" label="Метаболический возраст">
              <Input placeholder="Метаболический возраст" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Form.Item name="waterInBody" label="% воды в организме">
              <Input placeholder="% воды в организме" />
            </Form.Item>
          </Col>
            <Col xs={24} md={8} xl={8} >
                <Form.Item>
                    <Button style={{width:'100%'}} type="primary" onClick={backClick} >Предыдущий</Button>
                </Form.Item>
            </Col>
            <Col xs={24} md={8} xl={8}>
                <Form.Item>
                    <Button style={{width:'100%'}} type="primary" htmlType="submit">Сохранить</Button>
                </Form.Item>
            </Col>
            <Col xs={24} md={8} xl={8}>
                <Form.Item>
                    <Button style={{width:'100%'}} type="primary" onClick={nextClick}  >Следующий</Button>
                </Form.Item>
            </Col>
        </Row>
      </Form>
    </>
  );
};
export default Tab5;
