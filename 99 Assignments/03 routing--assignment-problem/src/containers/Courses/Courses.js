import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourseId: null
    }

    showCourse(id) {
        this.props.history.push('/Courses/' + id);
        this.setState({ selectedCourseId: id });
    }

    getCourseName() {
        const courses = [
            ...this.state.courses
        ];
        let courseName;
        courses.forEach(course => {
            if (course.id == this.state.selectedCourseId) {
                console.log(course);
                courseName = course.title;
            }
        });
        return courseName;
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (
                                <article
                                    className="Course"
                                    onClick={this.showCourse.bind(this, course.id)}
                                    key={course.id}>
                                    {course.title}
                                </article>
                            );
                        })
                    }
                </section>
                <Route path={this.props.match.url + '/Course/:id'} exact >
                    <Course
                        courseId={this.state.selectedCourseId}
                        courseName={this.getCourseName()}
                    />
                </Route>
            </div>
        );
    }
}

export default Courses;