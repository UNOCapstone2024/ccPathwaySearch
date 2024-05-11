# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class Guided_Pathways_Unit_Tests(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()
        self.driver.implicitly_wait(30)
        self.base_url = "https://www.google.com/"
        self.verificationErrors = []
        self.accept_next_alert = True
        self.host = "http://localhost:8000/"
    

#--------------------------------------------------------Search Functions-----------------------------------------------------------------------
    def test_central_c_c_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Central Community College")
        driver.find_element("xpath", "//option[@value='Central Community College']").click()
        expected_courses = [ "Pre-Civil Engineering", "Pre-Computer Engineering", "Pre-Construction Engineering", "Pre-Construction Management", "Criminology and Criminal Justice", "Theatre", "Pre-Electrical Engineering", "Pre-Architectural Engineering"]
        expected_courses.sort()
        found_courses = []
        message = "test_central_c_c_search failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)


    def test_iowa_western_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Iowa Western Community College")
        driver.find_element("xpath", "//option[@value='Iowa Western Community College']").click()
        expected_courses = ["Business"]
        expected_courses.sort()
        found_courses = []
        message = "test_iowa_western_search failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)
    
    

    def test_little_priest_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Little Priest Tribal College")
        driver.find_element("xpath", "//option[@value='Little Priest Tribal College']").click()
        expected_courses = ["Biology", "Business", "Sociology"]
        expected_courses.sort()
        found_courses = []
        message = "test_little_priest_search failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)


    def test_little_priest_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Little Priest Tribal College")
        driver.find_element("xpath", "//option[@value='Little Priest Tribal College']").click()
        expected_courses = ["Biology", "Business", "Sociology"]
        expected_courses.sort()
        found_courses = []
        message = "test_little_priest_search failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)


    def test_metro_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Metropolitan Community College")
        driver.find_element("xpath", "//option[@value='Metropolitan Community College']").click()
        expected_courses = ["Pre-Architectural Engineering", "Aviation", "Biology", "Emergency Management, concentration in Fire Service Management", 
                            "Emergency Management, concentration in Fire Service Management", "Business", "Chemistry", "Pre-Civil Engineering",
                            "Communication Studies", "Pre-Computer Engineering", "Computer Science", "Pre-Construction Engineering Technology", "Pre-Construction - Management",
                            "Criminal Justice", "Education - Elementary Education/Early Childhood Education Dual Endorsement", "Education - Elementary Education (STEM Concentration)",
                            "Education - Secondary Education (Biology Endorsement)", "Education - Secondary Education (Chemistry Endorsement)", 
                            "Education - Secondary Education (English Language Arts Endorsement)", "Education - Secondary Education (Mathematics Endorsement)",
                            "Education - Secondary Education (Science Endorsement)", "Education - Secondary Education (Social Science Endorsement)",
                            "Pre-Electronic Engineering", "English (American Literature, British/Irish/Anglophone Literature, Language Studies Concentrations)",
                            "English (Creative Nonfiction Concentration)", "Pre-Environmental Engineering", "Mathematics", "Management Information Systems",
                            "Physics", "Political Science", "Psychology", "Public Health", "Studio Art (2-D Arts)", "Studio Art (3-D Arts)", "Studio Art (Graphic Design)",
                            "Studio Art (Media Arts)", "Studio Art (Studio Art w/K-12 Cert)", "Sociology, concentration in Inequality and Social Justice", "Social Work"]
        expected_courses.sort()
        found_courses = []
        message = "Metropolitan Community College failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)

    def test_mid_plains_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Mid-Plains Community College")
        driver.find_element("xpath", "//option[@value='Mid-Plains Community College']").click()
        expected_courses = ["Pre-Civil Engineering", "Pre-Computer Engineering", "Pre-Construction Engineering", "Pre-Construction Management",
                            "Pre-Electrical Engineering", "Studio Art (Graphic Design)"]
        expected_courses.sort()
        found_courses = []
        message = "test_mid_plains_search failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)

    def test_northeast_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Northeast Community College")
        driver.find_element("xpath", "//option[@value='Northeast Community College']").click()
        expected_courses = ["Pre-Architectural Engineering", "Business Administration", "Pre-Civil Engineering", "Pre-Computer Engineering", 
                            "Pre-Construction Engineering", "Pre-Construction Management", "Criminal Justice [Corrections]", "Criminal Justice [Law Enforcement]",
                            "Pre-Electrical Engineering", "Studio Art (Graphic Design)", "Social Work", "Theatre"]
        expected_courses.sort()
        found_courses = []
        message = "test_northeast_search failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)

    def test_nebraska_indian_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Nebraska Indian Community College")
        driver.find_element("xpath", "//option[@value='Nebraska Indian Community College']").click()
        expected_courses = ["Bachelor of Multidisciplinary Studies", "Emergency Management, concentration in Criminology and Criminal Justice",
                            "Emergency Management, concentration in Tribal Management and Emergency Services",
                            "Emergency Management, concentration in Tribal Management and Emergency Services"]
        expected_courses.sort()
        found_courses = []
        message = "test_nebraska_indian_search failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)

    def test_southeast_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Southeast Community College")
        driver.find_element("xpath", "//option[@value='Southeast Community College']").click()
        expected_courses = ["Pre-Architectural Engineering", "Business Administration", "Pre-Civil Engineering", "Pre-Computer Engineering",
                            "Pre-Construction Engineering", "Pre-Construction Management", "Pre-Electrical Engineering"]
        expected_courses.sort()
        found_courses = []
        message = "test_southeast_search failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)

    def test_western_nebraska_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Western Nebraska Community College")
        driver.find_element("xpath", "//option[@value='Western Nebraska Community College']").click()
        expected_courses = ["Pre-Architectural Engineering", "Pre-Civil Engineering", "Pre-Computer Engineering",
                            "Pre-Construction Engineering", "Pre-Construction Management", "Pre-Electrical Engineering"]
        expected_courses.sort()
        found_courses = []
        message = "test_western_nebraska_search failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)

    def test_wayne_state_search(self):
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Wayne State College")
        driver.find_element("xpath", "//option[@value='Wayne State College']").click()
        expected_courses = ["Pre-Civil Engineering"]
        expected_courses.sort()
        found_courses = []
        message = "test_wayne_state_search failed"
        x = 1
        while True:
            try:
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td").text
            except:
                course = None
            if course != None:
                found_courses.append(course)  
            else:
                break   
            x += 1
        print()
        found_courses.sort()
        self.assertListEqual(expected_courses, found_courses, msg = message)
    

    def test_dropdown_area_of_study(self):
        message = "test_dropdown_area_of_study_disable failed"
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Wayne State College")
        driver.find_element("xpath", "//option[@value='Wayne State College']").click()
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("All")
        driver.find_element("xpath", "//option[@value='All']").click()
        
        driver.find_element(value = "areaOfStudyDyn").click()
        Select(driver.find_element(value = "areaOfStudyDyn")).select_by_visible_text("Biology")
        driver.find_element("xpath", "//option[@value='Biology']").click()
        expected_courses = {"Little Priest Tribal College": ["Biology"], 
                            "Metropolitan Community College": ["Biology", 
                                                                "Education - Secondary Education (Biology Endorsement)"]
                            }
        found_courses = []
        course_college = {}
        message = "test_dropdown_area_of_study test failed"
        x = 1
        while True:
            try:
                college = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td[2]").text
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td[1]").text
                print(college, course)
            except:
                course = None
            if course != None:
                if college not in course_college:
                    course_college[college] = []
                    
                course_college[college].append(course)
            else:
                break   
            x += 1
        print()
        print(course_college)
        self.assertDictEqual(expected_courses, course_college, msg = message)


    def test_dropdown_CC_Degree(self):
        message = "test_dropdown_CC_Degree_disable failed"
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Wayne State College")
        driver.find_element("xpath", "//option[@value='Wayne State College']").click()
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("All")
        driver.find_element("xpath", "//option[@value='All']").click()
        driver.find_element(value = "ccDegreeDyn").click()
        Select(driver.find_element(value = "ccDegreeDyn")).select_by_visible_text("MCC L.A.T.A.A. (Aviation focus)")
        driver.find_element("xpath", "//option[@value='MCC L.A.T.A.A. (Aviation focus)']").click()
        expected_course = "Aviation"
        expected_college = "Metropolitan Community College"

        message = "test_dropdown_CC_Degree search failed"

        course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[1]/td[1]").text
        college = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[1]/td[2]").text
 

        print()

        self.assertEqual(expected_course, course, msg = message)
        self.assertEqual(expected_college, college, msg = message)
    

    
    def test_textbox_theatre(self):
        driver = self.driver
        driver.get(self.host)

        driver.find_element(value = "search-mainGuidedPathways-unoDegree").click()
        textbox = driver.find_element(value = "search-mainGuidedPathways-unoDegree")
        textbox.send_keys("theatre")

        expected_courses = {"Central Community College": ["Theatre"], "Northeast Community College": ["Theatre"]}
        found_courses = []
        course_college = {}
        message = "test_textbox_theatre failed"
        x = 1
        while True:
            try:
                college = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td[2]").text
                course = driver.find_element("xpath", f"//table[@id='GuidedPathways']/tbody/tr[{x}]/td[1]").text
                print(college, course)
            except:
                course = None
            if course != None:
                if college not in course_college:
                    course_college[college] = []
                    
                course_college[college].append(course)
            else:
                break   
            x += 1
        print()
        print(course_college)
        self.assertDictEqual(expected_courses, course_college, msg = message)



#------------------------------------------Dropdown Tests and Serachbox Modification Tests--------------------------------------------
    def test_dropdown_CC_disable(self):
        message = "test_dropdown_CC_disable failed"
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "GuidedPathways-dropDown").click()
        Select(driver.find_element(value = "GuidedPathways-dropDown")).select_by_visible_text("Central Community College")
        driver.find_element("xpath", "//option[@value='Central Community College']").click()
        disabled = driver.find_element(value = 'search-mainGuidedPathways-unoDegree').is_enabled()
        self.assertFalse(disabled, msg = message)

    def test_dropdown_area_of_study_disable(self):
        message = "test_dropdown_area_of_study_disable failed"
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "areaOfStudyDyn").click()
        Select(driver.find_element(value = "areaOfStudyDyn")).select_by_visible_text("Biology")
        driver.find_element("xpath", "//option[@value='Biology']").click()
        disabled = driver.find_element(value = 'search-mainGuidedPathways-unoDegree').is_enabled()
        self.assertFalse(disabled, msg = message)

    def test_dropdown_CC_Degree_disable(self):
        message = "test_dropdown_CC_Degree_disable failed"
        driver = self.driver
        driver.get(self.host)
        driver.find_element(value = "ccDegreeDyn").click()
        Select(driver.find_element(value = "ccDegreeDyn")).select_by_visible_text("MCC L.A.T.A.A. (Aviation focus)")
        driver.find_element("xpath", "//option[@value='MCC L.A.T.A.A. (Aviation focus)']").click()
        disabled = driver.find_element(value = 'search-mainGuidedPathways-unoDegree').is_enabled()
        self.assertFalse(disabled, msg = message)

    def test_textbox_disable(self):
        driver = self.driver
        driver.get(self.host)

        driver.find_element(value = "search-mainGuidedPathways-unoDegree").click()
        textbox = driver.find_element(value = "search-mainGuidedPathways-unoDegree")
        textbox.send_keys("engineering")

        message = "test_disable_drowpdowns: GuidedPathways-dropDown failed"
        self.assertFalse(driver.find_element(value = 'GuidedPathways-dropDown').is_enabled(), msg = message)
        
        message = "test_disable_drowpdowns: areaOfStudyDyn failed"
        self.assertFalse(driver.find_element(value = 'areaOfStudyDyn').is_enabled(), msg = message)
        
        message = "test_disable_drowpdowns: ccDegreeDyn failed"
        self.assertFalse(driver.find_element(value = 'ccDegreeDyn').is_enabled(), msg = message)

        
#---------------------------------------------------Functions and Teardowns-------------------------------------------------------


    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True
    
    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True
    
    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True
    
    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
