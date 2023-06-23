
export const CanculateScore2 = (viewScore) => {
    
    if (viewScore?.main?.age >= 40) {
        if (
            !(
                viewScore?.tab2?.b &&
                viewScore?.tab2?.c &&
                viewScore?.tab2?.d &&
                viewScore?.tab2?.e &&
                viewScore?.tab2?.f &&
                viewScore?.tab2?.g &&
                viewScore?.tab2?.h &&
                viewScore?.tab2?.t
            )
        ) {
            if (viewScore?.main?.gender == "0") {
                if (viewScore?.main?.age >= 85 || viewScore?.main?.age <= 89) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            )  {
                                setScoreLevel("red");
                                setScore2OPResult(62);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(63);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(64);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(65);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(60);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(61);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(62);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(63);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(58);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(59);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(60);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(61);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(56);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(57);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(68);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(60);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(65);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(66);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(67);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(68);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(63);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(64);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(65);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(66);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(61);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(62);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(63);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(65);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(59);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(60);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(61);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(63);
                            }
                        }
                    }
                }
                // age 80-84
                if (viewScore?.main?.age >= 80 || viewScore?.main?.age <= 84) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(53);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(54);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(55);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(57);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(50);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(51);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(52);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(54);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(51);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(45);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(59);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(60);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(62);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(63);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(56);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(57);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(59);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(60);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(53);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(54);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(56);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(57);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(50);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(51);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(53);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(54);
                            }
                        }
                    }
                }
                // age 75-79
                else if (viewScore?.main?.age >= 75 || viewScore?.main?.age <= 79) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(46);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(41);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(42);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(43);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(45);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(37);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(39);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(40);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(41);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(34);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(35);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(37);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(53);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(55);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(56);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(58);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(51);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(52);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(53);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(46);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(42);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(43);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(46);
                            }
                        }
                    }
                }
                // age 70-74
                else if (viewScore?.main?.age >= 70 || viewScore?.main?.age <= 74) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(37);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(38);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(39);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(41);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(34);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(35);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(29);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(30);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(32);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(27);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(29);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(51);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(52);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(43);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(46);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(39);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(40);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(41);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(43);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(34);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(37);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(38);
                            }
                        }
                    }
                }
                // age 65-69
                else if (viewScore?.main?.age >= 65 || viewScore?.main?.age <= 69) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(27);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(30);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(22);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(24);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(20);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(41);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(42);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(46);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(34);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(37);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(39);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(30);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(24);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(27);
                            }
                        }
                    }
                }
                // age 60-64
                else if (viewScore?.main?.age >= 65 || viewScore?.main?.age <= 69) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(20);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(22);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(24);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(35);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(37);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(39);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(27);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(29);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(30);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(32);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(22);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(25);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(20);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            }
                        }
                    }
                }
                // age 55-59
                else if (viewScore?.main?.age >= 55 || viewScore?.main?.age <= 59) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(9);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(24);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            }
                        }
                    }
                }
                // age 50-54
                else if (viewScore?.main?.age >= 50 || viewScore?.main?.age <= 54) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(8);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("green");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(25);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(22);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            }
                        }
                    }
                }
                // age 45-49
                else if (viewScore?.main?.age >= 45 || viewScore?.main?.age <= 49) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(8);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(3);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            }
                        }
                    }
                }
                // age 40-44
                else if (viewScore?.main?.age >= 40 || viewScore?.main?.age <= 44) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(8);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(3);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(3);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(3);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("green");
                                setScore2OPResult(2);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("green");
                                setScore2OPResult(2);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("green");
                                setScore2OPResult(2);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(3);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            }
                        }
                    }
                }
            }

            // gender 1 ----------------------------------------------------------------------------------------
            // gender 1 ----------------------------------------------------------------------------------------
            // gender 1 ----------------------------------------------------------------------------------------
            else if (viewScore?.main?.gender === 1) {
                if (viewScore?.main?.age >= 85 || viewScore?.main?.age <= 89) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(54);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(59);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(64);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(53);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(58);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(63);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(52);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(56);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(61);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(46);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(50);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(55);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(60);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(54);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(59);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(64);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(53);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(58);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(63);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(52);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(56);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(61);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(46);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(50);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(55);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(60);
                            }
                        }
                    }
                }
                // age 80-84
                else if (viewScore?.main?.age >= 80 || viewScore?.main?.age <= 84) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(52);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(56);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(42);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(46);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(53);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(40);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(43);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(51);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(38);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(41);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(45);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(51);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(55);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(59);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(45);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(52);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(56);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(43);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(46);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(50);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(54);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(40);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(51);
                            }
                        }
                    }
                }
                // age 75-79
                else if (viewScore?.main?.age >= 75 || viewScore?.main?.age <= 79) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(40);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(42);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(45);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(37);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(39);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(42);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(34);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(41);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(38);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(45);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(48);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(51);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(54);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(42);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(50);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(39);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(41);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(38);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(41);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(43);
                            }
                        }
                    }
                }
                // age 70-74
                else if (viewScore?.main?.age >= 70 || viewScore?.main?.age <= 74) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(35);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(37);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(39);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(40);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(32);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(35);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(30);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(25);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(29);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(43);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(45);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(47);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(49);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(39);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(41);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(42);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(35);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(38);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(40);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(34);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            }
                        }
                    }
                }
                // age 65-69
                else if (viewScore?.main?.age >= 65 || viewScore?.main?.age <= 69) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(30);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(32);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(22);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(24);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(27);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(20);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(39);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(42);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(44);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(38);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(30);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(22);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(24);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            }
                        }
                    }
                }
                // age 60-64
                else if (viewScore?.main?.age >= 60 || viewScore?.main?.age <= 64) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(20);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(25);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(27);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(20);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(22);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(36);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(40);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(25);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(25);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            }
                        }
                    }
                }
                // age 55-59
                else if (viewScore?.main?.age >= 55 || viewScore?.main?.age <= 59) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(20);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(25);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(33);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(35);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(23);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(26);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(29);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(24);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            }
                        }
                    }
                }
                // age 50-54
                else if (viewScore?.main?.age >= 50 || viewScore?.main?.age <= 54) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(9);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(21);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(24);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(31);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(22);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(25);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(15);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(20);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            }
                        }
                    }
                }
                // age 45-49
                else if (viewScore?.main?.age >= 45 || viewScore?.main?.age <= 49) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(9);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(20);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(24);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(28);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(18);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(22);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            }
                        }
                    }
                }
                // age 40-44
                else if (viewScore?.main?.age >= 40 || viewScore?.main?.age <= 44) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(3);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(4);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(5);
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(17);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(20);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(24);
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(13);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(16);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(19);
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(8);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(10);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(12);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(14);
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(6);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                setScoreLevel("yellow");
                                setScore2OPResult(7);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(9);
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                setScoreLevel("red");
                                setScore2OPResult(11);
                            }
                            // else { continue };
                        }
                    }
                }
            }
        }
    }
    else if (viewScore?.main?.age < 40 || viewScore?.main?.age > 0) {
        if (!(viewScore?.tab2?.b && viewScore?.tab2?.c && viewScore?.tab2?.d && viewScore?.tab2?.e && viewScore?.tab2?.f && viewScore?.tab2?.g && viewScore?.tab2?.h && viewScore?.tab2?.t)) {
            if (viewScore?.tab4?.smoking==2 ) {
                if (viewScore?.tab5?.sad >= 180 && viewScore?.tab5?.sad >=161 ) {
                    if (viewScore?.tab7?.cHighDensityLipoprotein >= 8) {
                        setScoreLevel("red");
                        setScore2OPResult(6);
                    } else if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.00) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(7.9)) {
                        setScore2OPResult(5)
                        setScoreLevel("red");
                    } else if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(6.00) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(6.9)) {
                        setScore2OPResult(4)
                        setScoreLevel("orange");
                    } else if (viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(5.9)) {
                        setScore2OPResult(4)
                        setScoreLevel("orange");
                    }
                } else if (viewScore?.tab5?.sad >=141 && viewScore?.tab5?.sad >=160){
                    if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.0)){
                        setScore2OPResult(4)
                        setScoreLevel("orange");
                    } else if(viewScore?.tab7?.sad >= parseFloat(5.0) && viewScore?.tab7?.sad <= parseFloat(6.9)){
                        setScore2OPResult(3)
                        setScoreLevel("orange");
                    } else if(viewScore?.tab7?.sad <= parseFloat(4.9)){
                        setScore2OPResult(3)
                        setScoreLevel("yellow");
                    }
                } else if (viewScore?.tab5?.sad >=121 && viewScore?.tab5?.sad >=140){
                    if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(8.0)){
                        setScore2OPResult(3)
                        setScoreLevel("orange");
                    } else if(viewScore?.tab7?.sad >= parseFloat(5.0) && viewScore?.tab7?.sad <= parseFloat(6.9)){
                        setScore2OPResult(2)
                        setScoreLevel("yellow");
                    } else if(viewScore?.tab7?.sad <= parseFloat(4.9)){
                        setScore2OPResult(1)
                        setScoreLevel("green");
                    }
                } else if(viewScore?.tab5?.sad <=120 ){
                    if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.0)) {
                        setScore2OPResult(2)
                        setScoreLevel("yellow");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(6.9)){
                        setScore2OPResult(1)
                        setScoreLevel("green");
                    }
                        
                }
            }else{
                if (viewScore?.tab5?.sad >=161) {
                    if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(8.0)) {
                        setScore2OPResult(12)
                        setScoreLevel("red");
                    }else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(7.9)){
                        setScore2OPResult(10)
                        setScoreLevel("red");
                    }else if(viewScore?.tab7?.cHighDensityLipoprotein >=parseFloat(6.0) && viewScore?.tab7?.cHighDensityLipoprotein <=parseFloat(6.9) ){
                        setScore2OPResult(8)
                        setScoreLevel("red");
                    }else if(viewScore?.tab7?.cHighDensityLipoprotein <=parseFloat(5.9) && viewScore?.tab7?.cHighDensityLipoprotein >=parseFloat(5.0) ){
                        setScore2OPResult(7)
                        setScoreLevel("red");
                    }else if(viewScore?.tab7?.cHighDensityLipoprotein <=parseFloat(4.9)  ){
                        setScore2OPResult(6)
                        setScoreLevel("red");
                    }

                }else if(viewScore?.tab5?.sad >=141 && viewScore?.tab5?.sad <=160){
                    if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(8.0)){
                        setScore2OPResult(8)
                        setScoreLevel("red");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(7.9)){
                        setScore2OPResult(7)
                        setScoreLevel("red");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(6.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(6.9)){
                        setScore2OPResult(6)
                        setScoreLevel("red");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(5.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(5.9)){
                        setScore2OPResult(5)
                        setScoreLevel("red");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(4.9)){
                        setScore2OPResult(4)
                        setScoreLevel("orange");
                    }

                } else if(viewScore?.tab5?.sad >=121 && viewScore?.tab5?.sad <=140){
                    if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(8.0)) {
                        setScore2OPResult(6)
                        setScoreLevel("red");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(7.9)){
                        setScore2OPResult(5)
                        setScoreLevel("red");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(6.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(6.9)){
                        setScore2OPResult(4)
                        setScoreLevel("orange");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(5.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(5.9)){
                        setScore2OPResult(3)
                        setScoreLevel("orange");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(4.9)){
                        setScore2OPResult(3)
                        setScoreLevel("yellow");
                    }
                } else if(viewScore?.tab5?.sad <=120){
                    if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(8.0)) {
                        setScore2OPResult(4)
                        setScoreLevel("orange");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(6.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(7.9)){
                        setScore2OPResult(3)
                        setScoreLevel("orange");
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(5.9)){
                        setScore2OPResult(2)
                        setScoreLevel("yellow");
                    }
                }

            } 
        }

    }
    const setScore2OPResult = (item) =>{
        console.log("item",item);
        return item;
    }
    
};

export default CanculateScore2;