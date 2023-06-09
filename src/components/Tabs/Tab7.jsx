import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Tab7 = ({patient,onChanges ,info,setInfo}) => {
    const [form] = Form.useForm();
    const params = useParams();
    const onFinish = (values) => {
        let body = {
            nurse_doc_id: params.id,
            tab: 7,
            hb: values.hb,
            redBloodCells: values.redBloodCells,
            leukocytes: values.leukocytes,
            platelets: values.platelets,
            speedBlood: values.speedBlood,
            glucose: values.glucose,
            cReactive: values.cReactive,
            urea: values.urea,
            creatinine: values.creatinine,
            rapidGlomFilt: values.rapidGlomFilt,
            alt: values.alt,
            ast: values.ast,
            levelUricAcidSer: values.levelUricAcidSer,
            totalCholesterol: values.totalCholesterol,
            triglycerides: values.triglycerides,
            lowDensityLipoprotein: values.lowDensityLipoprotein,
            highDensityLipoprotein: values.highDensityLipoprotein,
            cHighDensityLipoprotein: values.cHighDensityLipoprotein,
            coeffAtherogenicity: values.coeffAtherogenicity,
            prothrombinTime: values.prothrombinTime,
            pti: values.pti,
            interNormRel: values.interNormRel,
            fibrinogen: values.fibrinogen,
            homocysteine: values.homocysteine,
        }
        api
            .post("/doc/create", body)
            .then((res) => {
                if (res.status==200) {
                    setInfo(body)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Данные успешно сохранены',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(() => {
                        onChanges("8");
                    }, 2000);
                }
            }
            )
            .catch((err) => {console.log(err);});
    }
    const nextClick = () => {
        onChanges('8');
    }
    const backClick = () => {
        onChanges('6');
    }
    useEffect (() => {
        form.setFieldsValue({
            hb: info?.hb,
            redBloodCells: info?.redBloodCells,
            leukocytes: info?.leukocytes,
            platelets: info?.platelets,
            speedBlood: info?.speedBlood,
            glucose: info?.glucose,
            cReactive: info?.cReactive,
            urea: info?.urea,
            creatinine: info?.creatinine,
            rapidGlomFilt: info?.rapidGlomFilt,
            alt: info?.alt,
            ast: info?.ast,
            levelUricAcidSer: info?.levelUricAcidSer,
            totalCholesterol: info?.totalCholesterol,
            triglycerides: info?.triglycerides,
            lowDensityLipoprotein: info?.lowDensityLipoprotein,
            highDensityLipoprotein: info?.highDensityLipoprotein,
            cHighDensityLipoprotein: info?.cHighDensityLipoprotein,
            coeffAtherogenicity: info?.coeffAtherogenicity,
            prothrombinTime: info?.prothrombinTime,
            pti: info?.pti,
            interNormRel: info?.interNormRel,
            fibrinogen: info?.fibrinogen,
            homocysteine: info?.homocysteine,
        });
    },[])
    const changeValue = (e) => {
        if(e.highDensityLipoprotein){
            let item = info?.totalCholesterol - e.highDensityLipoprotein;
            let item2 = (info?.totalCholesterol - e.highDensityLipoprotein)/e.highDensityLipoprotein;
            form.setFieldValue('cHighDensityLipoprotein',String((item).toFixed(2)))
            form.setFieldValue('coeffAtherogenicity',String((item2).toFixed(2)))
            let ee = {
                cHighDensityLipoprotein:String((item).toFixed(2)),
                highDensityLipoprotein:e.highDensityLipoprotein,
                coeffAtherogenicity:String((item2).toFixed(2)),
            }
            setInfo({...info,...ee})
        }else{
            setInfo({...info,...e})
        }
        
        if(e.creatinine){
            let item = rapidGlomFiltMeasure();
            let ee = {
                rapidGlomFilt:String(item),
                creatinine:e.creatinine
            }
            setInfo({...info,...ee})
            form.setFieldsValue({rapidGlomFilt:String(item)})
        }
        

    }
    const rapidGlomFiltMeasure = () => {
        let ckdEpi;
        if (patient?.gender && form.getFieldValue('creatinine') === "") return "";
        // Women
        if (patient?.gender === "1") {
          if (form.getFieldValue('creatinine') === "") return "";
          if (form.getFieldValue('creatinine') <= 62) {
            return (ckdEpi =
              ((144 *
                (0.993 * patient?.age) *
                (form.getFieldValue('creatinine') / 88.4)) /
                0.7) *
              (-0.328)).toFixed(2);
          }
          if (form.getFieldValue('creatinine') >= 62) {
            
            return (ckdEpi =
              ((144 *
                (0.993 * patient?.age) *
                (form.getFieldValue('creatinine') / 88.4)) /
                (0.7)) *
              (-1.210)).toFixed(2);
          }
        }
        // Men
        if (patient?.gender === "0") {
          if (form.getFieldValue('creatinine') === "") return "";
          if (form.getFieldValue('creatinine') <= 80) {
            return (ckdEpi =
              ((141 *
                (0.993 * patient?.age) *
                (form.getFieldValue('creatinine') / 88.4)) /
                0.9) *
              -0.412).toFixed(2);
          }
          if (form.getFieldValue('creatinine') >= 80) {
            return (ckdEpi =
              ((141 *
                (0.993 * patient?.age) *
                (form.getFieldValue('creatinine') / 88.4)) /
                0.9) *
              -1.21).toFixed(2);
          }
        }
      };



    return (<>
        <Typography.Title level={5}>7. Лабораторные данные:</Typography.Title>
        <Form
            form={form}
            size=""
            layout="vertical"
            onFinish={onFinish}
            onValuesChange={changeValue}
            >
            <Row gutter={24}>
                <Col span={12}><Form.Item name="hb" label="Hb, г/л" ><Input suffix="г/л" /></Form.Item></Col>
                <Col span={12}><Form.Item name="redBloodCells" label="Эритроциты, 1012/л" ><Input suffix="1012/л" /></Form.Item></Col>
                <Col span={12}><Form.Item name="leukocytes"  label="Лейкоциты, 109/л"><Input suffix="109/л"/></Form.Item></Col>
                <Col span={12}><Form.Item name="platelets" label="Тромбоциты, 109/л" ><Input suffix="109/л" /></Form.Item></Col>
                <Col span={12}><Form.Item name="speedBlood" label="СОЭ, мм/час"><Input suffix="мм/час" /></Form.Item></Col>
                <Col span={12}><Form.Item name="glucose" label="Глюкоза в крови, ммоль/л" ><Input suffix="ммоль/л"/></Form.Item></Col>
                <Col span={12}><Form.Item name="cReactive" label="С-реактивный белок, мг/л"><Input suffix="мг/л" /></Form.Item></Col>
                <Col span={12}><Form.Item name="urea" label="Мочевина, ммоль/л"><Input suffix="ммоль/л" /></Form.Item></Col>
                <Col span={12}><Form.Item name="creatinine" label="Креатинин, мкмоль/л" ><Input suffix="мкмоль/л"/></Form.Item></Col>
                <Col span={12}><Form.Item name="rapidGlomFilt" label="СКФ, мл/мин/1,73 м2 '"><Input disabled suffix="мл/мин/1,73 м2"/></Form.Item></Col>
                <Col span={12}><Form.Item name="alt" label="АЛТ, ед/л"  ><Input suffix="ед/л" /></Form.Item></Col>
                <Col span={12}><Form.Item name="ast" label="АСТ, ед/л"><Input suffix="ед/л"/></Form.Item></Col>
                <Col span={12}><Form.Item name="levelUricAcidSer" label="Мочевая кислота, мкмоль/л" ><Input suffix="мкмоль/л" /></Form.Item></Col>
                <Col span={12}><Form.Item name="totalCholesterol" label="Общий холестерин, ХС ммоль/л" ><Input suffix="ХС ммоль/л" /></Form.Item></Col>
                <Col span={12}><Form.Item name="triglycerides" label="Триглицериды, ммоль/л" ><Input suffix="ммоль/л" /></Form.Item></Col>
                <Col span={12} ><Form.Item name="lowDensityLipoprotein" label="ЛПНП, ммоль/л" ><Input suffix="ммоль/л" /></Form.Item></Col>
                <Col span={12}><Form.Item name="highDensityLipoprotein" label="ЛПВП, ммоль/л" ><Input suffix="ммоль/л" /></Form.Item></Col>
                <Col span={12} ><Form.Item name="cHighDensityLipoprotein" label="ХС-неЛПВП"><Input disabled /></Form.Item></Col>
                <Col span={12}><Form.Item name="coeffAtherogenicity" label="Коэффицент атерогенности"  ><Input disabled /></Form.Item></Col>
                <Col span={12}><Form.Item name="prothrombinTime" label="Протромбиновое время, сек"><Input suffix="сек" /></Form.Item></Col>
                <Col span={12}><Form.Item name="pti" label="ПТИ, %"><Input suffix="%" /></Form.Item></Col>
                <Col span={12}><Form.Item name="interNormRel" label="МНО" ><Input/></Form.Item> </Col>
                <Col span={12}><Form.Item name="fibrinogen" label="Фибриноген, г/л" ><Input suffix="г/л" /></Form.Item></Col>
                <Col span={12}> <Form.Item name="homocysteine" label="Гомоцистеин, мкмоль/л ИФА метод" ><Input suffix="мкмоль/л ИФА метод" /></Form.Item></Col>
                <Col span={8}>
                        <Form.Item
                            >
                            <Button type="primary" onClick={backClick} >Предыдущий</Button>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            >
                            <Button type="primary" htmlType="submit">Сохранить</Button>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            >
                            <Button type="primary" onClick={nextClick}  >Следующий</Button>
                        </Form.Item>
                    </Col>

            </Row>
        </Form>
    </>);
}
export default Tab7;