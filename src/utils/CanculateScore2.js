
export const CanculateScore2 = (viewScore) => {
    const age = viewScore?.main?.age;
    const smoking = viewScore?.tab4?.smoking;
    const sad = viewScore?.tab5?.sad;
    console.log(smoking,"agee");
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
                if (age>40 || age<=44) {
                    if (smoking==2 || smoking==3) {
                        
                    }else if (smoking==1) {
                        return "0";
                    }
                }
               
                if (viewScore?.main?.age >= 85 || viewScore?.main?.age <= 89) {
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            )  {
                                
                                return "62";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "63";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "64";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "65";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "60";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "61";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "62";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "63";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "58";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "59";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "60";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "61";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "56";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "57";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "68";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "60";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "65";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "66";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "67";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "68";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "63";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "64";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "65";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "66";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "61";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "62";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "63";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "65";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "59";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "60";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "61";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "63";
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
                                
                                return "53";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "54";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "55";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "57";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "50";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "51";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "52";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "54";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "47";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "48";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "49";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "51";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "44";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "45";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "47";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "48";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "59";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "60";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "62";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "63";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "56";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "57";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "59";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "60";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "53";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "54";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "56";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "57";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "50";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "51";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "53";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "54";
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
                                
                                return "44";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "46";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "47";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "48";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "41";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "42";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "43";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "45";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "37";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "39";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "40";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "41";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "34";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "35";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "36";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "37";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "53";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "55";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "56";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "58";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "49";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "51";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "52";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "53";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "46";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "47";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "48";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "49";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "42";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "43";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "44";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "46";
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
                                
                                return "37";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "38";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "39";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "41";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "33";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "34";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "35";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "36";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "29";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "30";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "31";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "32";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "26";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "27";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "29";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "48";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "49";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "51";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "52";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "43";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "44";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "46";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "49";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "39";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "40";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "41";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "43";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "34";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "36";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "37";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "38";
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
                                
                                return "27";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "30";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "31";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "22";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "23";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "24";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "26";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "18";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "19";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "20";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "21";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "15";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "17";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "41";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "42";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "44";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "46";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "34";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "36";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "37";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "39";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "30";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "31";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "33";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "23";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "24";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "26";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "27";
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
                                
                                return "20";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "21";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "22";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "24";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "18";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "19";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "15";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "12";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "33";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "35";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "37";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "39";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "27";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "29";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "30";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "32";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "22";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "23";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "25";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "26";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "18";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "20";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "21";
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
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "15";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "18";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "14";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "11";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "9";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "26";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "31";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "33";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "21";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "23";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "24";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "26";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "18";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "19";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "21";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "15";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "16";
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
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "14";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "11";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "8";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "6";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "21";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "23";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "25";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "28";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "18";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "19";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "22";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "15";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "17";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "13";
                            }
                        }
                    }
                
                }
                // age 45-49
                else if (age >= 45 && age <= 49) {
                    console.log("test Csoere");
                    if (viewScore?.tab4?.smoking === 2 || viewScore?.tab4?.smoking === 3) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "10";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "8";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "6";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "3";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "4";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "18";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "21";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "23";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "15";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "17";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "13";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "10";
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
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "8";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "6";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "3";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "3";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "3";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "4";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "2";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "2";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "2";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "3";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "15";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "19";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "14";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "10";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "7";
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
                                
                                return "49";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "54";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "59";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "64";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "48";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "53";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "58";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "63";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "47";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "52";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "56";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "61";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "46";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "50";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "55";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "60";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "49";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "54";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "59";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "64";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "48";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "53";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "58";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "63";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "47";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "52";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "56";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "61";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "46";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "50";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "55";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "60";
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
                                
                                return "44";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "48";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "52";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "56";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "42";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "46";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "49";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "53";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "40";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "43";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "47";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "51";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "38";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "41";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "45";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "48";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "47";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "51";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "55";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "59";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "45";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "49";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "52";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "56";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "43";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "46";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "50";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "54";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "40";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "44";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "48";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "51";
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
                                
                                return "40";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "42";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "45";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "48";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "37";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "39";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "42";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "44";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "34";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "36";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "49";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "41";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "31";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "33";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "36";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "38";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "45";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "48";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "51";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "54";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "42";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "44";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "47";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "50";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "39";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "41";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "44";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "47";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "36";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "38";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "41";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "43";
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
                                
                                return "35";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "37";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "39";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "40";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "32";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "33";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "35";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "36";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "30";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "31";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "33";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "25";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "26";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "29";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "43";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "45";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "47";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "49";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "39";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "41";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "42";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "44";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "35";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "36";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "38";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "40";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "31";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "33";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "34";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "36";
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
                                
                                return "26";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "30";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "32";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "22";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "24";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "26";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "27";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "18";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "20";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "21";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "23";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "15";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "18";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "19";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "36";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "39";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "42";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "44";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "31";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "33";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "36";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "38";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "26";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "30";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "33";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "22";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "24";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "26";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "28";
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
                                
                                return "20";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "23";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "25";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "27";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "19";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "20";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "22";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "15";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "18";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "15";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "31";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "33";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "36";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "40";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "25";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "31";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "33";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "21";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "23";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "25";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "28";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "19";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "21";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "23";
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
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "18";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "20";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "23";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "18";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "15";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "12";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "25";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "33";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "35";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "21";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "23";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "26";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "29";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "19";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "21";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "24";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "15";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "19";
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
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "19";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "15";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "12";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "9";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "21";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "24";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "28";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "31";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "19";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "22";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "25";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "15";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "20";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "16";
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
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "16";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "12";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "9";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "7";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "20";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "24";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "28";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "18";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "22";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "17";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "13";
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
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "13";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "10";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "5";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "7";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "3";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "4";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "5";
                            }
                        }
                    } else if (viewScore?.tab4?.smoking === 1) {
                        if (viewScore?.tab5?.sad >= 160 || viewScore?.tab5?.sad <= 179) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "14";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "17";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "20";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "24";
                            }
                        } else if (viewScore?.tab5?.sad >= 140 || viewScore?.tab5?.sad <= 159) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "11";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "13";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "16";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "19";
                            }
                        } else if (viewScore?.tab5?.sad >= 120 || viewScore?.tab5?.sad <= 139) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "8";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "10";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "12";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "14";
                            }
                        } else if (viewScore?.tab5?.sad >= 100 || viewScore?.tab5?.sad <= 119) {
                            if (
                                viewScore?.tab7?.highDensityLipoprotein >= 3 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 3.9
                            ) {
                                
                                return "6";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 4 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 4.9
                            ) {
                                
                                return "7";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 5 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 5.9
                            ) {
                                
                                return "9";
                            } else if (
                                viewScore?.tab7?.highDensityLipoprotein >= 6 ||
                                viewScore?.tab7?.highDensityLipoprotein <= 6.9
                            ) {
                                
                                return "11";
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
                        
                        return "6";
                    } else if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.00) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(7.9)) {
                        return "5";
                        
                    } else if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(6.00) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(6.9)) {
                        return "4";
                        
                    } else if (viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(5.9)) {
                        return "4";
                        
                    }
                } else if (viewScore?.tab5?.sad >=141 && viewScore?.tab5?.sad >=160){
                    if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.0)){
                        return "4";
                        
                    } else if(viewScore?.tab7?.sad >= parseFloat(5.0) && viewScore?.tab7?.sad <= parseFloat(6.9)){
                        return "3";
                        
                    } else if(viewScore?.tab7?.sad <= parseFloat(4.9)){
                        return "3";
                        
                    }
                } else if (viewScore?.tab5?.sad >=121 && viewScore?.tab5?.sad >=140){
                    if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(8.0)){
                        return "3";
                        
                    } else if(viewScore?.tab7?.sad >= parseFloat(5.0) && viewScore?.tab7?.sad <= parseFloat(6.9)){
                        return "2";
                        
                    } else if(viewScore?.tab7?.sad <= parseFloat(4.9)){
                        return "1";
                        
                    }
                } else if(viewScore?.tab5?.sad <=120 ){
                    if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.0)) {
                        return "2";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(6.9)){
                        return "1";
                        
                    }
                        
                }
            }else{
                if (viewScore?.tab5?.sad >=161) {

                    if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(8.0)) {
                        return "12";
                        
                    }else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(7.9)){
                        return "10";
                        
                    }else if(viewScore?.tab7?.cHighDensityLipoprotein >=parseFloat(6.0) && viewScore?.tab7?.cHighDensityLipoprotein <=parseFloat(6.9) ){
                        return "8";
                        
                    }else if(viewScore?.tab7?.cHighDensityLipoprotein <=parseFloat(5.9) && viewScore?.tab7?.cHighDensityLipoprotein >=parseFloat(5.0) ){
                        return "7";
                        
                    }else if(viewScore?.tab7?.cHighDensityLipoprotein <=parseFloat(4.9)  ){
                        return "6";
                        
                    }

                }else if(viewScore?.tab5?.sad >=141 && viewScore?.tab5?.sad <=160){

                    if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(8.0)){
                        return "8";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(7.9)){
                        return "7";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(6.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(6.9)){
                        return "6";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(5.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(5.9)){
                        return "5";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(4.9)){
                        return "4";
                        
                    }

                } else if(viewScore?.tab5?.sad >=121 && viewScore?.tab5?.sad <=140){

                    if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(8.0)) {
                        return "6";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(7.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(7.9)){
                        return "5";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(6.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(6.9)){
                        return "4";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(5.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(5.9)){
                        return "3";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(4.9)){
                        return "3";
                        
                    }
                } else if(viewScore?.tab5?.sad <=120){

                    if (viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(8.0)) {
                        return "4";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein >= parseFloat(6.0) && viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(7.9)){
                        return "3";
                        
                    } else if(viewScore?.tab7?.cHighDensityLipoprotein <= parseFloat(5.9)){
                        return "2";
                        
                    }
                }


            } 
        }

    }
    
    
};

export default CanculateScore2;